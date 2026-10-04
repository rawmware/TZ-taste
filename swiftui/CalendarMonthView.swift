//tz-meta {"id":"swiftui-calendar-month","title":"Gig Calendar","category":"SwiftUI","file":"swiftui/CalendarMonthView.swift","tags":["swiftui","calendar"],"description":"Gig-poster month grid with orange stamps marking show dates and venues.","dnas":["jazz-blue-note"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

private let bg = Color(hex: "101418")
private let ink = Color(hex: "eef2f5")
private let accent = Color(hex: "e8734a")
private let muted = Color(hex: "7a8a96")
private let line = Color(hex: "243038")

private struct Gig {
    let day: Int
    let band: String
    let venue: String
}

struct CalendarMonthView: View {
    // October 2026: the 1st is a Thursday, 31 days.
    private let leadingDays = [28, 29, 30]
    private let days = Array(1...31)
    private let trailingDays = [1]
    private let weekdays = ["M", "T", "W", "T", "F", "S", "S"]
    private let today = 3

    private let gigs: [Gig] = [
        Gig(day: 3, band: "Blue Note Quartet", venue: "The Press Room"),
        Gig(day: 10, band: "Harbor Lights", venue: "The Stone Church"),
        Gig(day: 17, band: "Midnight Reel", venue: "3S Artspace"),
        Gig(day: 24, band: "Salt & Cedar", venue: "The Word Barn"),
        Gig(day: 31, band: "Foghorn Five", venue: "The Press Room"),
    ]

    private var columns: [GridItem] {
        Array(repeating: GridItem(.flexible(), spacing: 0), count: 7)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            VStack(alignment: .leading, spacing: 2) {
                Text("LIVE ON THE SEACOAST")
                    .font(.system(size: 11, weight: .semibold))
                    .tracking(3)
                    .foregroundColor(accent)
                Text("October")
                    .font(.custom("Bebas Neue", size: 58))
                    .foregroundColor(ink)
                Text("2026 — five nights, five rooms")
                    .font(.system(size: 13))
                    .foregroundColor(muted)
            }
            .padding(.horizontal, 20)
            .padding(.top, 26)
            .padding(.bottom, 18)

            LazyVGrid(columns: columns, spacing: 0) {
                ForEach(weekdays, id: \.self) { d in
                    Text(d)
                        .font(.system(size: 11, weight: .bold, design: .monospaced))
                        .foregroundColor(muted)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 8)
                }
            }
            .padding(.horizontal, 12)

            LazyVGrid(columns: columns, spacing: 0) {
                ForEach(leadingDays, id: \.self) { d in
                    dayCell(day: d, inMonth: false, gig: nil)
                }
                ForEach(days, id: \.self) { d in
                    dayCell(day: d, inMonth: true, gig: gigs.first(where: { $0.day == d }))
                }
                ForEach(trailingDays, id: \.self) { d in
                    dayCell(day: d, inMonth: false, gig: nil)
                }
            }
            .padding(.horizontal, 12)

            Text("Doors at 7, music at 8. Tickets at the door unless noted — come early, the small rooms fill up.")
                .font(.system(size: 12))
                .foregroundColor(muted)
                .lineSpacing(3)
                .padding(.horizontal, 20)
                .padding(.top, 18)
                .padding(.bottom, 30)

            Spacer()
        }
        .background(bg.ignoresSafeArea())
    }

    private func dayCell(day: Int, inMonth: Bool, gig: Gig?) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            HStack {
                Text("\(day)")
                    .font(.system(size: 13, weight: inMonth ? .semibold : .regular))
                    .foregroundColor(inMonth ? ink : muted.opacity(0.5))
                Spacer()
                if inMonth && day == today {
                    Circle().fill(accent).frame(width: 6, height: 6)
                }
            }
            Spacer(minLength: 0)
            if let gig {
                gigStamp(gig)
            }
        }
        .padding(6)
        .frame(height: 72)
        .frame(maxWidth: .infinity, alignment: .topLeading)
        .overlay(
            Rectangle()
                .stroke(line, lineWidth: 0.75)
        )
        .background(inMonth && day == today ? accent.opacity(0.08) : Color.clear)
    }

    private func gigStamp(_ gig: Gig) -> some View {
        VStack(alignment: .leading, spacing: 1) {
            Text(gig.band.uppercased())
                .font(.system(size: 7.5, weight: .heavy))
                .tracking(0.4)
                .foregroundColor(bg)
                .lineLimit(1)
            Text(gig.venue)
                .font(.system(size: 7))
                .foregroundColor(bg.opacity(0.75))
                .lineLimit(1)
        }
        .padding(.vertical, 4)
        .padding(.horizontal, 6)
        .background(accent)
        .clipShape(RoundedRectangle(cornerRadius: 3))
        .rotationEffect(.degrees(-4))
        .shadow(color: accent.opacity(0.35), radius: 4, x: 0, y: 2)
    }
}

#Preview {
    CalendarMonthView()
}
