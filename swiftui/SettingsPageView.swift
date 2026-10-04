//tz-meta {"id":"swiftui-settings-page","title":"Settings Page","category":"SwiftUI","file":"swiftui/SettingsPageView.swift","tags":["swiftui","settings"],"description":"Spec-sheet settings with hairline rows, working controls, and mono microcaps section labels.","dnas":["laboratory-clean"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

private let bg = Color(hex: "fbfcfd")
private let ink = Color(hex: "0f1720")
private let accent = Color(hex: "0a7d8c")
private let muted = Color(hex: "6b7684")
private let line = Color(hex: "dfe4ea")

struct SettingsPageView: View {
    @State private var darkMode = false
    @State private var haptics = true
    @State private var pushAlerts = true
    @State private var textSize: Double = 16
    @State private var digest = 0
    private let digestOptions = ["Daily", "Weekly", "Off"]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                Text("Settings")
                    .font(.custom("IBM Plex Sans", size: 30).weight(.semibold))
                    .foregroundColor(ink)
                    .padding(.top, 20).padding(.bottom, 24)

                section("ACCOUNT") {
                    row(icon: "person.crop.circle", title: "Mara Ellison", subtitle: "mara.ellison@example.com") {
                        Image(systemName: "chevron.right").font(.system(size: 13, weight: .semibold)).foregroundColor(muted)
                    }
                    row(icon: "lock.shield", title: "Password & security", subtitle: "Last changed 41 days ago") {
                        Image(systemName: "chevron.right").font(.system(size: 13, weight: .semibold)).foregroundColor(muted)
                    }
                }

                section("PREFERENCES") {
                    row(icon: "moon.fill", title: "Dark mode") {
                        Toggle("", isOn: $darkMode).labelsHidden().tint(accent)
                    }
                    row(icon: "iphone.gen3", title: "Haptic feedback", subtitle: "Gentle taps on key actions") {
                        Toggle("", isOn: $haptics).labelsHidden().tint(accent)
                    }
                    VStack(alignment: .leading, spacing: 8) {
                        HStack {
                            Image(systemName: "textformat.size").foregroundColor(muted).frame(width: 22)
                            Text("Text size").font(.custom("IBM Plex Sans", size: 15)).foregroundColor(ink)
                            Spacer()
                            Text("\(Int(textSize)) pt").font(.system(size: 13, design: .monospaced)).foregroundColor(muted)
                        }
                        Slider(value: $textSize, in: 12...24, step: 1).tint(accent).padding(.leading, 34)
                    }
                    .padding(.vertical, 10)
                }

                section("NOTIFICATIONS") {
                    row(icon: "bell.fill", title: "Push alerts") {
                        Toggle("", isOn: $pushAlerts).labelsHidden().tint(accent)
                    }
                    VStack(alignment: .leading, spacing: 8) {
                        HStack {
                            Image(systemName: "envelope.fill").foregroundColor(muted).frame(width: 22)
                            Text("Email digest").font(.custom("IBM Plex Sans", size: 15)).foregroundColor(ink)
                        }
                        Picker("Email digest", selection: $digest) {
                            ForEach(0..<digestOptions.count, id: \.self) { i in Text(digestOptions[i]).tag(i) }
                        }
                        .pickerStyle(.segmented).padding(.leading, 34)
                    }
                    .padding(.vertical, 10)
                }

                section("ABOUT") {
                    row(icon: "info.circle", title: "Version", subtitle: "Spec sheet v3 — build 2.14.0") { EmptyView() }
                }

                Button {} label: {
                    Text("Sign out")
                        .font(.custom("IBM Plex Sans", size: 15).weight(.semibold))
                        .foregroundColor(accent).padding(.vertical, 14)
                }
                .padding(.top, 8)
                Text("Signed in on this iPhone only. Sessions on other devices stay untouched.")
                    .font(.custom("IBM Plex Sans", size: 12)).foregroundColor(muted)
                    .padding(.top, 4).padding(.bottom, 40)
            }
            .padding(.horizontal, 20)
        }
        .background(bg.ignoresSafeArea())
    }

    // Distinctive: every section label is mono microcaps, like a spec sheet.

    private func section<Content: View>(_ title: String, @ViewBuilder content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: 0) {
            Text(title)
                .font(.system(size: 11, weight: .semibold, design: .monospaced))
                .tracking(2.5).foregroundColor(muted).padding(.bottom, 6)
            VStack(spacing: 0) { content() }
                .overlay(alignment: .top) { Rectangle().fill(line).frame(height: 1) }
                .overlay(alignment: .bottom) { Rectangle().fill(line).frame(height: 1) }
        }
        .padding(.bottom, 28)
    }

    private func row<Content: View>(icon: String, title: String, subtitle: String? = nil, @ViewBuilder trailing: () -> Content) -> some View {
        VStack(spacing: 0) {
            HStack(spacing: 12) {
                Image(systemName: icon).foregroundColor(muted).frame(width: 22)
                VStack(alignment: .leading, spacing: 2) {
                    Text(title).font(.custom("IBM Plex Sans", size: 15)).foregroundColor(ink)
                    if let subtitle {
                        Text(subtitle).font(.custom("IBM Plex Sans", size: 12)).foregroundColor(muted)
                    }
                }
                Spacer()
                trailing()
            }
            .padding(.vertical, 10)
            Rectangle().fill(line).frame(height: 0.75)
        }
    }
}

#Preview {
    SettingsPageView()
}
