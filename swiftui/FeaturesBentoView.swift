//tz-meta {"id":"swiftui-features-bento","title":"FeaturesBento","category":"SwiftUI","file":"swiftui/FeaturesBentoView.swift","tags":["swiftui","features"],"description":"Asymmetric Memphis bento: large tile, wide tile, rotated sticker card, and squiggle divider.","dnas":["memphis-milano"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

struct FeaturesBentoView: View {
    private let bg = Color(hex: "#f7efe3")
    private let ink = Color(hex: "#1c1a22")
    private let accent = Color(hex: "#ff4d8d")
    private let muted = Color(hex: "#7a7488")
    private let line = Color(hex: "#1c1a22")

    private var squiggle: some View {
        GeometryReader { geo in
            Path { p in
                let w = geo.size.width, h = geo.size.height
                p.move(to: .zero)
                var x: CGFloat = 0
                while x < w {
                    p.addCurve(to: CGPoint(x: x + w / 12, y: h),
                              control1: CGPoint(x: x + w / 24, y: 0),
                              control2: CGPoint(x: x + w / 24, y: h))
                    x += w / 12
                }
            }
            .stroke(accent, lineWidth: 3)
        }
        .frame(height: 22)
    }

    var body: some View {
        ZStack {
            bg.ignoresSafeArea()
            ScrollView {
                VStack(alignment: .leading, spacing: 18) {
                    Text("WHAT IT DOES")
                        .font(.custom("Shrikhand", size: 13))
                        .tracking(3)
                        .foregroundStyle(muted)
                    Text("Loud tools for\nquiet work.")
                        .font(.custom("Shrikhand", size: 44))
                        .lineSpacing(4)
                        .foregroundStyle(ink)

                    squiggle.padding(.vertical, 4)

                    // One LARGE tile (spans full width, tall)
                    VStack(alignment: .leading, spacing: 10) {
                        Image(systemName: "bolt.fill")
                            .font(.system(size: 30))
                            .foregroundStyle(accent)
                        Text("One-tap export")
                            .font(.custom("Shrikhand", size: 26))
                            .foregroundStyle(ink)
                        Text("Every board, note, and sketch leaves this app as a clean PDF in under four seconds. No dialogs, no pickers, no progress spinners pretending to work.")
                            .font(.system(size: 15))
                            .foregroundStyle(muted)
                            .lineSpacing(4)
                    }
                    .padding(22)
                    .background(Color.white)
                    .border(line, width: 2)
                    .shadow(color: line, radius: 0, x: 6, y: 6)

                    HStack(alignment: .top, spacing: 18) {
                        // WIDE short tile (left column, shorter)
                        VStack(alignment: .leading, spacing: 8) {
                            Image(systemName: "calendar")
                                .font(.system(size: 24))
                                .foregroundStyle(ink)
                            Text("Timeline scrub")
                                .font(.custom("Shrikhand", size: 20))
                            Text("Drag one thumb across the whole project history.")
                                .font(.system(size: 14))
                                .foregroundStyle(muted)
                        }
                        .padding(18)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .background(Color.white)
                        .border(line, width: 2)
                        .shadow(color: line, radius: 0, x: 5, y: 5)

                        // ROTATED STICKER card (right column, tilted)
                        VStack(alignment: .leading, spacing: 8) {
                            Image(systemName: "star.fill")
                                .font(.system(size: 24))
                                .foregroundStyle(accent)
                            Text("Staff pick")
                                .font(.custom("Shrikhand", size: 20))
                            Text("Offline mode works in tunnels. Tested.")
                                .font(.system(size: 14))
                                .foregroundStyle(muted)
                        }
                        .padding(18)
                        .background(accent.opacity(0.16))
                        .border(line, width: 2)
                        .shadow(color: line, radius: 0, x: 5, y: 5)
                        .rotationEffect(.degrees(-4))
                    }
                    .padding(.top, 4)

                    Text("Plus forty more tricks we will shut up about until you ask.")
                        .font(.system(size: 13))
                        .foregroundStyle(muted)
                        .padding(.top, 6)
                }
                .padding(24)
            }
        }
    }
}

#Preview { FeaturesBentoView() }
