//tz-meta {"id":"swiftui-empty-state","title":"Quiet Empty State","category":"SwiftUI","file":"swiftui/EmptyStateView.swift","tags":["swiftui","empty-state"],"description":"Restrained scandi empty state: one muted symbol, calm serif, honest copy, single text button.","dnas":["scandi-calm"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

private let bg = Color(hex: "faf7f1")
private let ink = Color(hex: "2e2a25")
private let accent = Color(hex: "a9805a")
private let muted = Color(hex: "9a917f")
private let line = Color(hex: "e4dccb")

struct EmptyStateView: View {
    @State private var tapped = false

    // Distinctive: deliberate restraint — one symbol, one headline,
    // one honest sentence, one text button, and a lot of air.

    var body: some View {
        VStack {
            Spacer()

            VStack(spacing: 0) {
                Image(systemName: "tray.fill")
                    .font(.system(size: 72, weight: .light))
                    .foregroundColor(muted.opacity(0.55))
                    .padding(.bottom, 36)

                Text("Nothing saved yet")
                    .font(.custom("DM Serif Display", size: 34))
                    .foregroundColor(ink)
                    .padding(.bottom, 14)

                Text("Pieces you love will wait for you here. When you're ready, start a collection and it will grow quietly — no rush, no noise.")
                    .font(.system(size: 15))
                    .foregroundColor(muted)
                    .multilineTextAlignment(.center)
                    .lineSpacing(5)
                    .frame(maxWidth: 300)
                    .padding(.bottom, 30)

                Button {
                    tapped = true
                } label: {
                    Text(tapped ? "The shelves are ready when you are" : "Browse the collection")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundColor(tapped ? muted : accent)
                        .underline(!tapped, color: accent)
                        .padding(.vertical, 8)
                }
                .buttonStyle(.plain)
                .disabled(tapped)
            }
            .padding(.horizontal, 40)

            Spacer()

            // A whisper of a footer — nothing more.
            VStack(spacing: 10) {
                Rectangle()
                    .fill(line)
                    .frame(width: 64, height: 1)

                Text("COLLECTIONS · EST. MMXXVI")
                    .font(.system(size: 10, weight: .medium))
                    .tracking(3)
                    .foregroundColor(muted.opacity(0.8))

                Text("Kept simple on purpose")
                    .font(.system(size: 10))
                    .tracking(2)
                    .foregroundColor(muted.opacity(0.6))
            }
            .padding(.bottom, 44)
        }
        .background(bg.ignoresSafeArea())
    }
}

#Preview {
    EmptyStateView()
}
