//tz-meta {"id":"swiftui-hero-vaporwave","title":"HeroVaporwave","category":"SwiftUI","file":"swiftui/HeroVaporwaveView.swift","tags":["swiftui","hero"],"description":"Synthwave station hero with slitted sun disc, perspective grid floor, and chrome headline.","dnas":["vaporwave-sunset"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

struct HeroVaporwaveView: View {
    private let bg = Color(hex: "#1a1216")
    private let ink = Color(hex: "#f7e8d8")
    private let accent = Color(hex: "#ff7e5f")
    private let muted = Color(hex: "#9a7f72")
    private let gridLine = Color(hex: "#3a2a30")

    // Slitted sun: stacked rounded rects with widening gaps toward the bottom
    private var slittedSun: some View {
        VStack(spacing: 0) {
            ForEach(0..<8, id: \.self) { i in
                RoundedRectangle(cornerRadius: 8)
                    .fill(
                        LinearGradient(
                            colors: [accent, ink.opacity(0.55)],
                            startPoint: .top, endPoint: .bottom
                        )
                    )
                    .frame(width: 260 - CGFloat(i) * 4, height: 16)
                    .padding(.bottom, i < 4 ? 6 : 6 + CGFloat(i - 3) * 7)
            }
        }
    }

    // Perspective grid floor
    private var gridFloor: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height
            Path { p in
                // horizon lines, denser toward the bottom
                for i in 0..<9 {
                    let t = CGFloat(i) / 8
                    let y = t * t * h
                    p.move(to: CGPoint(x: 0, y: y))
                    p.addLine(to: CGPoint(x: w, y: y))
                }
                // converging verticals
                for i in -6...6 {
                    p.move(to: CGPoint(x: w / 2 + CGFloat(i) * w * 0.06, y: 0))
                    p.addLine(to: CGPoint(x: w / 2 + CGFloat(i) * w * 0.22, y: h))
                }
            }
            .stroke(gridLine, lineWidth: 1)
        }
    }

    var body: some View {
        ZStack {
            bg.ignoresSafeArea()

            VStack(spacing: 0) {
                Spacer()
                slittedSun
                    .padding(.bottom, -6)

                // Headline over the horizon
                VStack(spacing: 6) {
                    Text("MIDNIGHT")
                        .font(.custom("Monoton", size: 58))
                        .foregroundStyle(ink)
                        .shadow(color: accent.opacity(0.7), radius: 14)
                    Text("FREQUENCY 94.1 FM — ALL NIGHT LONG")
                        .font(.system(size: 12, weight: .medium, design: .monospaced))
                        .tracking(3)
                        .foregroundStyle(muted)
                }
                .padding(.vertical, 10)

                ZStack(alignment: .top) {
                    gridFloor
                    HStack(spacing: 10) {
                        Image(systemName: "play.fill")
                            .font(.system(size: 14))
                        Text("Tune in live")
                            .font(.system(size: 15, weight: .semibold))
                    }
                    .foregroundStyle(bg)
                    .padding(.horizontal, 26)
                    .padding(.vertical, 13)
                    .background(accent)
                    .clipShape(Capsule())
                    .padding(.top, 26)
                }
                .frame(height: 240)

                Spacer()
            }
        }
    }
}

#Preview { HeroVaporwaveView() }
