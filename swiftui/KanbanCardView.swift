//tz-meta {"id":"swiftui-kanban-card","title":"Blueprint Kanban","category":"SwiftUI","file":"swiftui/KanbanCardView.swift","tags":["swiftui","kanban"],"description":"Blueprint kanban column with annotated spec-sheet cards, dimension lines, and amber flags.","dnas":["blueprint-tech"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

private let bg = Color(hex: "17407f")
private let ink = Color(hex: "f2f6fc")
private let accent = Color(hex: "ffcf3f")
private let muted = Color(hex: "8fb3e8")
private let line = Color(hex: "ffffff40")

private struct SpecCard: Identifiable {
    let id = UUID()
    let title: String
    let rev: String
    let priority: String
    let owner: String
    let due: String
    let width: String
    var checks: String? = nil
    var progress: Double? = nil
}

struct KanbanCardView: View {
    private let cards: [SpecCard] = [
        SpecCard(title: "Guest checkout flow", rev: "REV C", priority: "P1", owner: "RC", due: "Due Fri", width: "340 PT"),
        SpecCard(title: "Empty-cart illustration", rev: "REV B", priority: "P2", owner: "JM", due: "Due Mon", width: "280 PT"),
        SpecCard(title: "Receipt email template", rev: "REV A", priority: "P3", owner: "AK", due: "Due Wed", width: "600 PT", checks: "4 of 6 checks", progress: 0.66),
    ]

    var body: some View {
        ZStack {
            blueprintGrid
            VStack(alignment: .leading, spacing: 0) {
                columnHeader.padding(.horizontal, 20).padding(.top, 28)
                ScrollView {
                    LazyVStack(spacing: 26) {
                        ForEach(cards) { annotatedCard($0) }
                    }
                    .padding(.horizontal, 20).padding(.top, 20).padding(.bottom, 40)
                }
            }
        }
        .background(bg.ignoresSafeArea())
    }

    private var columnHeader: some View {
        HStack(spacing: 12) {
            Text("IN PROGRESS").font(.custom("Space Grotesk", size: 22).weight(.bold)).tracking(1.5).foregroundColor(ink)
            Text("\(cards.count)").font(.custom("Space Grotesk", size: 13).weight(.bold)).foregroundColor(bg)
                .frame(width: 26, height: 26).background(accent).clipShape(Circle())
            Spacer()
            Image(systemName: "plus").font(.system(size: 16, weight: .bold)).foregroundColor(muted)
        }
    }

    // Distinctive: cards read as annotated spec sheets — dimension line on top,
    // revision tag, and an amber priority flag.

    private func annotatedCard(_ card: SpecCard) -> some View {
        VStack(spacing: 8) {
            dimensionLine(label: card.width)
            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    Text(card.rev).font(.system(size: 10, weight: .bold, design: .monospaced)).tracking(1)
                        .foregroundColor(ink).padding(.vertical, 4).padding(.horizontal, 8)
                        .overlay(RoundedRectangle(cornerRadius: 4).stroke(line, lineWidth: 1))
                    Spacer()
                    HStack(spacing: 5) {
                        Image(systemName: "flag.fill").font(.system(size: 11)).foregroundColor(accent)
                        Text(card.priority).font(.system(size: 11, weight: .bold, design: .monospaced)).foregroundColor(accent)
                    }
                }
                Text(card.title).font(.custom("Space Grotesk", size: 18).weight(.semibold)).foregroundColor(ink).lineSpacing(2)
                if let checks = card.checks, let progress = card.progress {
                    VStack(alignment: .leading, spacing: 6) {
                        Text(checks).font(.system(size: 11, design: .monospaced)).foregroundColor(muted)
                        GeometryReader { geo in
                            ZStack(alignment: .leading) {
                                Rectangle().fill(line).frame(height: 4)
                                Rectangle().fill(accent).frame(width: geo.size.width * progress, height: 4)
                            }
                        }
                        .frame(height: 4)
                    }
                }
                HStack {
                    ZStack {
                        Circle().stroke(muted, lineWidth: 1).frame(width: 30, height: 30)
                        Text(card.owner).font(.system(size: 10, weight: .bold)).foregroundColor(ink)
                    }
                    Text(card.due).font(.system(size: 12, design: .monospaced)).foregroundColor(muted)
                    Spacer()
                    Image(systemName: "arrow.up.right").font(.system(size: 13)).foregroundColor(muted)
                }
            }
            .padding(16)
            .background(ink.opacity(0.08))
            .overlay(RoundedRectangle(cornerRadius: 6).stroke(line, lineWidth: 1))
            .clipShape(RoundedRectangle(cornerRadius: 6))
        }
    }

    private func dimensionLine(label: String) -> some View {
        VStack(spacing: 2) {
            Text(label).font(.system(size: 9, weight: .semibold, design: .monospaced)).tracking(1.5).foregroundColor(muted)
            HStack(spacing: 0) {
                Rectangle().fill(muted).frame(width: 1, height: 9)
                Rectangle().fill(muted).frame(height: 1)
                Rectangle().fill(muted).frame(width: 1, height: 9)
            }
        }
        .padding(.horizontal, 24)
    }

    private var blueprintGrid: some View {
        GeometryReader { geo in
            Path { p in
                var x: CGFloat = 0
                while x <= geo.size.width {
                    p.move(to: CGPoint(x: x, y: 0)); p.addLine(to: CGPoint(x: x, y: geo.size.height)); x += 32
                }
                var y: CGFloat = 0
                while y <= geo.size.height {
                    p.move(to: CGPoint(x: 0, y: y)); p.addLine(to: CGPoint(x: geo.size.width, y: y)); y += 32
                }
            }
            .stroke(ink.opacity(0.06), lineWidth: 1)
        }
        .ignoresSafeArea()
    }
}

#Preview {
    KanbanCardView()
}
