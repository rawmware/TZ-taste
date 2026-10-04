//tz-meta {"id":"swiftui-stats-terminal","title":"StatsTerminal","category":"SwiftUI","file":"swiftui/StatsTerminalView.swift","tags":["swiftui","stats"],"description":"Terminal readout of stats: mono rows, amber highlights, and a blinking cursor block.","dnas":["retro-terminal"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

struct StatsTerminalView: View {
    private let bg = Color(hex: "#0b0f0a")
    private let ink = Color(hex: "#33ff66")
    private let amber = Color(hex: "#ffb000")
    private let dim = Color(hex: "#1f6b3a")
    private let line = Color(hex: "#33ff6633")
    private let surface = Color(hex: "#0e140d")

    @State private var cursorOn = true

    private let rows: [(String, String, String)] = [
        ("uptime", "99.98%", "last 90 days"),
        ("deployments", "1,204", "this quarter"),
        ("avg build", "41s", "down from 3m 12s"),
        ("incidents", "0", "sev-1, trailing 12mo"),
        ("restore", "7m 40s", "last fire drill"),
        ("cost / deploy", "$0.04", "compute only"),
    ]

    private func row(label: String, value: String, note: String) -> some View {
        HStack(alignment: .firstTextBaseline) {
            Text("$ " + label)
                .foregroundStyle(ink)
            Spacer()
            VStack(alignment: .trailing, spacing: 2) {
                Text(value)
                    .foregroundStyle(amber)
                    .fontWeight(.bold)
                Text(note)
                    .font(.system(size: 11))
                    .foregroundStyle(dim)
            }
        }
        .padding(.vertical, 8)
    }

    var body: some View {
        ZStack {
            bg.ignoresSafeArea()
            ScrollView {
                VStack(alignment: .leading, spacing: 0) {
                    // Title bar
                    HStack(spacing: 8) {
                        Circle().fill(dim).frame(width: 11, height: 11)
                        Circle().fill(amber).frame(width: 11, height: 11)
                        Circle().fill(ink).frame(width: 11, height: 11)
                        Spacer()
                        Text("ops — zsh")
                            .font(.system(size: 12, design: .monospaced))
                            .foregroundStyle(dim)
                    }
                    .padding(12)
                    .background(surface)

                    VStack(alignment: .leading, spacing: 0) {
                        Text("// fleet status — pulled 08:12 UTC")
                            .foregroundStyle(dim)
                            .padding(.vertical, 12)

                        ForEach(rows, id: \.0) { r in
                            row(label: r.0, value: r.1, note: r.2)
                            Rectangle().fill(line).frame(height: 1)
                        }

                        // Prompt line with blinking cursor block
                        HStack(spacing: 4) {
                            Text("ops@fleet:~$ ")
                                .foregroundStyle(ink)
                            Rectangle()
                                .fill(ink)
                                .frame(width: 10, height: 20)
                                .opacity(cursorOn ? 1 : 0)
                        }
                        .padding(.top, 14)

                        Text("# six numbers. no dashboards were harmed.")
                            .foregroundStyle(dim)
                            .padding(.top, 8)
                    }
                    .font(.system(size: 14, design: .monospaced))
                    .padding(.horizontal, 16)
                    .padding(.bottom, 20)

                    Spacer()
                }
            }
            .onAppear {
                Timer.scheduledTimer(withTimeInterval: 0.53, repeats: true) { _ in
                    withAnimation(.linear(duration: 0.05)) { cursorOn.toggle() }
                }
            }
        }
    }
}

#Preview { StatsTerminalView() }
