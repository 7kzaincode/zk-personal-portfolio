// Cuts the person out of every PNG in a folder (Apple's Vision framework, on
// device) and puts them on the site's page colour.
import Foundation
import Vision
import CoreImage

let args = CommandLine.arguments
let inDir = URL(fileURLWithPath: args[1])
let outDir = URL(fileURLWithPath: args[2])
let ctx = CIContext()
let srgb = CGColorSpace(name: CGColorSpace.sRGB)!
let cream = CIColor(red: 251.0 / 255, green: 248.0 / 255, blue: 241.0 / 255, colorSpace: srgb)!
let files = try FileManager.default.contentsOfDirectory(atPath: inDir.path).filter { $0.hasSuffix(".png") }.sorted()
for f in files {
  guard let img = CIImage(contentsOf: inDir.appendingPathComponent(f)) else { continue }
  let req = VNGeneratePersonSegmentationRequest()
  req.qualityLevel = .accurate
  req.outputPixelFormat = kCVPixelFormatType_OneComponent8
  try VNImageRequestHandler(ciImage: img, options: [:]).perform([req])
  guard let buf = req.results?.first?.pixelBuffer else { continue }
  var mask = CIImage(cvPixelBuffer: buf)
  mask = mask.transformed(by: CGAffineTransform(scaleX: img.extent.width / mask.extent.width, y: img.extent.height / mask.extent.height))
  let bg = CIImage(color: cream).cropped(to: img.extent)
  let out = img.applyingFilter("CIBlendWithMask", parameters: [kCIInputBackgroundImageKey: bg, kCIInputMaskImageKey: mask])
  try ctx.writePNGRepresentation(of: out, to: outDir.appendingPathComponent(f), format: .RGBA8, colorSpace: srgb)
}
print("cut out \(files.count) frames")
