//tz-meta {"id":"swiftui-cta-deploy","title":"CtaDeploy","category":"SwiftUI","file":"swiftui/CtaDeployView.swift","tags":["swiftui","cta"],"description":"Industrial deploy CTA: typed command line, big condensed headline, and rotated rubber-stamp button.","dnas":["industrial-brutalist"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

struct CtaDeployView: View {
    private let bg = Color(hex: "#d8d8d4")
    private let ink = Color(hex: "#141412")
    private let accent = Color(hex: "#ff4d00")
    private let muted = Color(hex: "#5c5c58")
    private let line = Color(hex: "#141412")
    private let surface = Color(hex: "#c9c9c4")

    var body: some View {
        ZStack {
            bg.ignoresSafeArea()
            VStack(alignment: .leading, spacing: 0) {
                // Typed command strip
                HStack(spacing: 0) {
                    Text("$ ")
                        .foregroundStyle(muted)
                    Text("deploy --now")
                        .foregroundStyle(ink)
                        .fontWeight(.semibold)
                    Rectangle()
                        .fill(accent)
                        .frame(width: 9, height: 18)
                        .padding(.leading, 6)
                    Spacer()
                    Image(systemName: "terminal.fill")
                        .foregroundStyle(muted)
                }
                .font(.system(size: 15, design: .monospaced))
                .padding(14)
                .background(ink)
                .foregroundStyle(bg)
                .padding(.horizontal, 24)
                .padding(.top, 60)

                Spacer()

                // Big condensed headline, left-ragged
                VStack(alignment: .leading, spacing: 10) {
                    Text("SHIP IT")
                        .font(.custom("Anton", size: 92))
                        .foregroundStyle(ink)
                    Text("BEFORE LUNCH.")
                        .font(.custom("Anton", size: 92))
                        .foregroundStyle(accent)
                    Text("One command. No staging purgatory, no ticket queue, no \"we'll review it Thursday.\" Your build goes live while the coffee is still hot.")
                        .font(.system(size: 16))
                        .foregroundStyle(muted)
                        .lineSpacing(5)
                        .frame(maxWidth: 320)
                }
                .padding(.horizontal, 24)

                Spacer()

                // Rubber-stamp button
                HStack {
                    Spacer()
                    Text("APPROVED — SHIP IT")
                        .font(.custom("Anton", size: 22))
                        .tracking(2)
                        .foregroundStyle(accent)
                        .padding(.horizontal, 26)
                        .padding(.vertical, 14)
                        .border(accent, width: 4)
                        .rotationEffect(.degrees(-6))
                        .shadow(color: ink.opacity(0.25), radius: 0, x: 4, y: 4)
                    Spacer()
                }
                .padding(.bottom, 26)

                // Caution-tape footer strip
                HStack {
                    Text("NO ROLLBACK DRAMA")
                    Spacer()
                    Text("EST. DOWNTIME: 0 MIN")
                }
                .font(.custom("Anton", size: 13))
                .tracking(1.5)
                .foregroundStyle(bg)
                .padding(.horizontal, 24)
                .padding(.vertical, 12)
                .background(ink)
            }
        }
    }
}

#Preview { CtaDeployView() }
