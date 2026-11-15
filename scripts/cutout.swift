// Cuts the person out of a video and puts them on the site's page colour.
// Frames arrive on stdin as raw RGBA (width x height given as arguments) and
// leave on stdout the same way, so nothing is written to disk. The person is
// found on this Mac by Apple's Vision framework.
import Foundation
import Vision
import CoreImage

let args = CommandLine.arguments
guard args.count == 3, let w = Int(args[1]), let h = Int(args[2]) else {
  FileHandle.standardError.write("usage: cutout <width> <height>\n".data(using: .utf8)!)
  exit(2)
}
let frameBytes = w * h * 4
let input = FileHandle.standardInput
let output = FileHandle.standardOutput
let ctx = CIContext()
let srgb = CGColorSpace(name: CGColorSpace.sRGB)!
let cream = CIColor(red: 251.0 / 255, green: 248.0 / 255, blue: 241.0 / 255, colorSpace: srgb)!
let extent = CGRect(x: 0, y: 0, width: w, height: h)
let background = CIImage(color: cream).cropped(to: extent)
var out = [UInt8](repeating: 0, count: frameBytes)
var count = 0

while true {
  var data = Data(capacity: frameBytes)
  while data.count < frameBytes {
    let chunk = input.readData(ofLength: frameBytes - data.count)
    if chunk.isEmpty { break }
    data.append(chunk)
  }
  if data.count < frameBytes { break }
  try autoreleasepool {
    let img = CIImage(bitmapData: data, bytesPerRow: w * 4, size: extent.size, format: .RGBA8, colorSpace: srgb)
    let req = VNGeneratePersonSegmentationRequest()
    req.qualityLevel = .accurate
    req.outputPixelFormat = kCVPixelFormatType_OneComponent8
    try VNImageRequestHandler(ciImage: img, options: [:]).perform([req])
    var result = background
    if let buf = req.results?.first?.pixelBuffer {
      var mask = CIImage(cvPixelBuffer: buf)
      mask = mask.transformed(by: CGAffineTransform(scaleX: extent.width / mask.extent.width, y: extent.height / mask.extent.height))
      result = img.applyingFilter("CIBlendWithMask", parameters: [kCIInputBackgroundImageKey: background, kCIInputMaskImageKey: mask])
    }
    ctx.render(result, toBitmap: &out, rowBytes: w * 4, bounds: extent, format: .RGBA8, colorSpace: srgb)
    output.write(Data(out))
  }
  count += 1
}
FileHandle.standardError.write("cut out \(count) frames\n".data(using: .utf8)!)
