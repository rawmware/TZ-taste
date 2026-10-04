//tz-meta {"id":"swiftui-hero-editorial","title":"HeroEditorial","category":"SwiftUI","file":"swiftui/HeroEditorialView.swift","tags":["swiftui","hero"],"description":"Broadsheet editorial hero with oversized drop-cap lede, hairline rules, and small-caps kicker.","dnas":["editorial-serif"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

struct HeroEditorialView: View {
    private let bg = Color(hex: "#f5f1e8")
    private let ink = Color(hex: "#1c1a15")
    private let accent = Color(hex: "#b5461f")
    private let muted = Color(hex: "#6f6a5e")
    private let rule = Color(hex: "#1c1a1526")
    private let surface = Color(hex: "#efe9da")

    var body: some View {
        ZStack {
            bg.ignoresSafeArea()
            VStack(alignment: .leading, spacing: 0) {
                // Dateline strip
                HStack {
                    Text("EST. 2026 — PRINTED DAILY")
                    Spacer()
                    Text("VOL. XLII — No. 7")
                }
                .font(.custom("Fraunces", size: 11))
                .tracking(1.5)
                .foregroundStyle(muted)
                .padding(.horizontal, 24)
                .padding(.vertical, 14)

                Rectangle().fill(rule).frame(height: 1)

                // Kicker + headline, ragged-left column
                VStack(alignment: .leading, spacing: 14) {
                    Text("FIELD NOTES ON MAKING THINGS WELL")
                        .font(.custom("Fraunces", size: 12))
                        .tracking(3)
                        .foregroundStyle(accent)
                    Text("Slow software\nfor fast times.")
                        .font(.custom("Fraunces", size: 64))
                        .fontWeight(.black)
                        .lineSpacing(2)
                        .foregroundStyle(ink)
                    Text("A short weekly dispatch on craft, interfaces, and the discipline of leaving things out.")
                        .font(.custom("Fraunces", size: 17))
                        .italic()
                        .foregroundStyle(muted)
                }
                .padding(.horizontal, 24)
                .padding(.vertical, 28)

                Rectangle().fill(rule).frame(height: 1)

                // Drop-cap lede paragraph
                HStack(alignment: .top, spacing: 10) {
                    Text("W")
                        .font(.custom("Fraunces", size: 96))
                        .fontWeight(.black)
                        .foregroundStyle(accent)
                        .frame(height: 72)
                    Text("e read forty onboarding screens this week so you would not have to. Nine of them asked for a phone number before showing a single pixel of value. The other thirty-one led with a pricing table. None of them opened with a sentence. This issue is a short argument for opening with a sentence.")
                        .font(.custom("Fraunces", size: 16))
                        .lineSpacing(6)
                        .foregroundStyle(ink)
                }
                .padding(.horizontal, 24)
                .padding(.vertical, 24)

                Rectangle().fill(rule).frame(height: 1)

                // Foot strip: issue meta + text CTA
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("THIS ISSUE")
                            .font(.custom("Fraunces", size: 11)).tracking(2).foregroundStyle(muted)
                        Text("1,900 words · 6 min read")
                            .font(.custom("Fraunces", size: 13)).foregroundStyle(ink)
                    }
                    Spacer()
                    HStack(spacing: 8) {
                        Text("Read the dispatch")
                            .font(.custom("Fraunces", size: 15))
                            .fontWeight(.semibold)
                        Image(systemName: "arrow.right")
                            .font(.system(size: 13, weight: .semibold))
                    }
                    .foregroundStyle(accent)
                }
                .padding(.horizontal, 24)
                .padding(.vertical, 18)
                .background(surface)

                Spacer()
            }
        }
    }
}

#Preview { HeroEditorialView() }
