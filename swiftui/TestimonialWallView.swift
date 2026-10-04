//tz-meta {"id":"swiftui-testimonial-wall","title":"TestimonialWall","category":"SwiftUI","file":"swiftui/TestimonialWallView.swift","tags":["swiftui","testimonials"],"description":"Offset masonry of record-sleeve quote cards with varying heights, sleeve rotation, and Side A/B toggle.","dnas":["vinyl-crate"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

struct TestimonialWallView: View {
    private let bg = Color(hex: "#efe3cb")
    private let ink = Color(hex: "#221a12")
    private let accent = Color(hex: "#c0392b")
    private let muted = Color(hex: "#7d6a52")
    private let line = Color(hex: "#d8c4a0")

    @State private var side: Int = 0

    private struct Quote {
        let text: String; let name: String; let role: String
        let tall: Bool; let rotated: Bool
    }

    private let sideA: [Quote] = [
        Quote(text: "Swapped our whole intake form for one page. Callbacks doubled in a month.", name: "Mara Ellison", role: "Owner, Ellison Salon", tall: false, rotated: false),
        Quote(text: "He answered every email himself. The site shipped in nine days and our regulars noticed before we told them.", name: "Devon Park", role: "Manager, Harbor Books", tall: true, rotated: true),
        Quote(text: "Cheapest quote we got. Also the only one that worked on my phone.", name: "Priya Nair", role: "Founder, Nair Catering", tall: false, rotated: false),
    ]
    private let sideB: [Quote] = [
        Quote(text: "Our old site took six seconds to load. Now it takes less than one and the phone rings more.", name: "Tom Beckett", role: "Owner, Beckett Auto", tall: true, rotated: false),
        Quote(text: "I asked for three changes after launch. All three were done by morning.", name: "Alba Reyes", role: "Director, Reyes Dance", tall: false, rotated: true),
        Quote(text: "Straightforward price, no upsells, no jargon. Rare.", name: "Sam Whitfield", role: "Partner, Whitfield & Co.", tall: false, rotated: false),
    ]

    private func sleeve(_ q: Quote) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            // Record label peeking out
            HStack {
                ZStack {
                    Circle().fill(ink).frame(width: 44, height: 44)
                    Circle().fill(accent).frame(width: 14, height: 14)
                    Circle().fill(bg).frame(width: 4, height: 4)
                }
                Spacer()
                Image(systemName: "quote.opening")
                    .font(.system(size: 18))
                    .foregroundStyle(muted)
            }
            Text(q.text)
                .font(.custom("Alfa Slab One", size: 15))
                .lineSpacing(6)
                .foregroundStyle(ink)
            Spacer(minLength: 4)
            VStack(alignment: .leading, spacing: 2) {
                Text(q.name)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(ink)
                Text(q.role)
                    .font(.system(size: 12))
                    .foregroundStyle(muted)
            }
        }
        .padding(18)
        .frame(minHeight: q.tall ? 240 : 170, alignment: .top)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.white.opacity(0.7))
        .border(line, width: 1.5)
        .shadow(color: ink.opacity(0.18), radius: 6, x: 0, y: 4)
        .rotationEffect(.degrees(q.rotated ? -2.5 : 0))
    }

    var body: some View {
        ZStack {
            bg.ignoresSafeArea()
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    HStack {
                        VStack(alignment: .leading, spacing: 6) {
                            Text("WORD ON THE STREET")
                                .font(.custom("Alfa Slab One", size: 12))
                                .tracking(2)
                                .foregroundStyle(muted)
                            Text("People talk.")
                                .font(.custom("Alfa Slab One", size: 40))
                                .foregroundStyle(ink)
                        }
                        Spacer()
                        // Side A/B toggle
                        HStack(spacing: 0) {
                            ForEach(0..<2) { i in
                                Text(i == 0 ? "A" : "B")
                                    .font(.system(size: 14, weight: .bold))
                                    .frame(width: 40, height: 34)
                                    .background(side == i ? ink : Color.clear)
                                    .foregroundStyle(side == i ? bg : ink)
                                    .onTapGesture { withAnimation { side = i } }
                            }
                        }
                        .background(Color.white.opacity(0.6))
                        .border(ink, width: 1.5)
                    }

                    let quotes = side == 0 ? sideA : sideB
                    // Offset masonry: staggered columns
                    HStack(alignment: .top, spacing: 14) {
                        VStack(spacing: 14) {
                            sleeve(quotes[0])
                            sleeve(quotes[2])
                        }
                        VStack(spacing: 14) {
                            sleeve(quotes[1])
                                .padding(.top, 26) // the offset
                        }
                    }
                    .animation(.easeInOut, value: side)

                    Text("Names used with permission. Ask us and we will put you in touch directly.")
                        .font(.system(size: 12))
                        .foregroundStyle(muted)
                }
                .padding(22)
            }
        }
    }
}

#Preview { TestimonialWallView() }
