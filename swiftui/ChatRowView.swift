//tz-meta {"id":"swiftui-chat-row","title":"Chat Thread","category":"SwiftUI","file":"swiftui/ChatRowView.swift","tags":["swiftui","chat"],"description":"Surf-shop chat thread with ticket-stripe message bubbles, reply row, and input bar.","dnas":["surf-shack"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

private let bg = Color(hex: "f9ecd8")
private let ink = Color(hex: "40342a")
private let accent = Color(hex: "2e8f8a")
private let muted = Color(hex: "a08d70")
private let line = Color(hex: "e0d0ae")

private struct ChatMsg: Identifiable {
    let id = UUID()
    let text: String
    let mine: Bool
    let time: String
    var replyTo: String? = nil
}

private struct DashLine: Shape {
    func path(in rect: CGRect) -> Path {
        var p = Path()
        p.move(to: CGPoint(x: rect.minX, y: rect.midY))
        p.addLine(to: CGPoint(x: rect.maxX, y: rect.midY))
        return p
    }
}

struct ChatRowView: View {
    @State private var draft = ""
    @State private var messages: [ChatMsg] = [
        ChatMsg(text: "Morning! Is the 7am lesson still open this Saturday?", mine: true, time: "8:02 AM"),
        ChatMsg(text: "It is — one spot left in the beginner group. Boards and wetsuits included, just bring a towel.", mine: false, time: "8:19 AM"),
        ChatMsg(text: "Perfect, book me in. Do I need to be a strong swimmer?", mine: true, time: "8:21 AM"),
        ChatMsg(text: "You're booked. It helps to be comfortable in the water, but we stay waist-deep the whole time — most first-timers stand up by the end.", mine: false, time: "8:26 AM", replyTo: "Do I need to be a strong swimmer?"),
    ]

    var body: some View {
        VStack(spacing: 0) {
            header
            ScrollView {
                LazyVStack(spacing: 14) {
                    ForEach(messages) { bubble(for: $0) }
                }
                .padding(.horizontal, 16).padding(.vertical, 18)
            }
            inputBar
        }
        .background(bg.ignoresSafeArea())
    }

    private var header: some View {
        VStack(spacing: 0) {
            HStack(spacing: 12) {
                ZStack {
                    Circle().fill(accent).frame(width: 44, height: 44)
                    Image(systemName: "sailboat.fill").foregroundColor(bg).font(.system(size: 20))
                }
                VStack(alignment: .leading, spacing: 2) {
                    Text("Tidewater Surf Co.").font(.custom("Shrikhand", size: 20)).foregroundColor(ink)
                    HStack(spacing: 5) {
                        Circle().fill(accent).frame(width: 7, height: 7)
                        Text("Online — usually replies within the hour").font(.system(size: 12)).foregroundColor(muted)
                    }
                }
                Spacer()
                Image(systemName: "phone.fill").foregroundColor(muted).font(.system(size: 17))
            }
            .padding(.horizontal, 16).padding(.vertical, 12)
            Rectangle().fill(line).frame(height: 1)
        }
        .background(bg)
    }

    // Distinctive: every bubble is a surfboard ticket — accent edge stripe,
    // dashed perforation above the timestamp.

    private func bubble(for m: ChatMsg) -> some View {
        HStack {
            if m.mine { Spacer(minLength: 64) }
            HStack(spacing: 0) {
                if !m.mine { Rectangle().fill(accent).frame(width: 6) }
                VStack(alignment: .leading, spacing: 8) {
                    if let quote = m.replyTo {
                        Text(quote).font(.system(size: 12, weight: .medium)).foregroundColor(muted)
                            .lineLimit(2).padding(8).frame(maxWidth: .infinity, alignment: .leading)
                            .background(bg.opacity(0.45)).clipShape(RoundedRectangle(cornerRadius: 6))
                    }
                    Text(m.text).font(.system(size: 15)).foregroundColor(m.mine ? bg : ink).lineSpacing(2)
                    DashLine()
                        .stroke((m.mine ? bg : muted).opacity(0.55), style: StrokeStyle(lineWidth: 1, dash: [4, 4]))
                        .frame(height: 1)
                    Text(m.time).font(.system(size: 11, weight: .medium)).tracking(0.5)
                        .foregroundColor(m.mine ? bg.opacity(0.85) : muted)
                }
                .padding(12)
                if m.mine { Rectangle().fill(accent).frame(width: 6) }
            }
            .background(m.mine ? ink : line)
            .clipShape(RoundedRectangle(cornerRadius: 10))
            if !m.mine { Spacer(minLength: 64) }
        }
    }

    private var inputBar: some View {
        VStack(spacing: 0) {
            Rectangle().fill(line).frame(height: 1)
            HStack(spacing: 10) {
                TextField("Message Tidewater…", text: $draft)
                    .font(.system(size: 15)).foregroundColor(ink)
                    .padding(.vertical, 12).padding(.horizontal, 16)
                    .background(line.opacity(0.55)).clipShape(Capsule())
                Button {
                    let text = draft.trimmingCharacters(in: .whitespacesAndNewlines)
                    guard !text.isEmpty else { return }
                    messages.append(ChatMsg(text: text, mine: true, time: "Now"))
                    draft = ""
                } label: {
                    Image(systemName: "paperplane.fill").font(.system(size: 16)).foregroundColor(bg)
                        .frame(width: 44, height: 44)
                        .background(draft.isEmpty ? muted : accent).clipShape(Circle())
                }
                .disabled(draft.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
            }
            .padding(.horizontal, 16).padding(.vertical, 12)
        }
        .background(bg)
    }
}

#Preview {
    ChatRowView()
}
