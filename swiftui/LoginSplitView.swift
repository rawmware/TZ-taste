//tz-meta {"id":"swiftui-login-split","title":"Deco Login","category":"SwiftUI","file":"swiftui/LoginSplitView.swift","tags":["swiftui","login"],"description":"Art-deco split login with a gold fan divider, hairline fields, and a monogram mark.","dnas":["art-deco-luxe"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

private let bg = Color(hex: "0d0b08")
private let ink = Color(hex: "f2e7c9")
private let accent = Color(hex: "c9a227")
private let muted = Color(hex: "8a7f63")
private let line = Color(hex: "c9a2274d")

struct LoginSplitView: View {
    @State private var email = ""
    @State private var password = ""
    @State private var signedIn = false

    var body: some View {
        HStack(spacing: 0) {
            leftPanel.frame(maxWidth: .infinity)
            fanDivider
            rightPanel.frame(maxWidth: .infinity)
        }
        .background(bg.ignoresSafeArea())
    }

    // MARK: - Left: brand panel with deco fan motif

    private var leftPanel: some View {
        VStack {
            Spacer()
            ZStack {
                Circle().stroke(accent, lineWidth: 1.5).frame(width: 92, height: 92)
                Circle().stroke(line, lineWidth: 1).frame(width: 104, height: 104)
                Text("GH").font(.custom("Cinzel", size: 30)).foregroundColor(accent)
            }
            Text("THE GILDED HOUR").font(.custom("Cinzel", size: 17)).tracking(4).foregroundColor(ink).padding(.top, 20)
            Rectangle().fill(line).frame(width: 120, height: 1).padding(.vertical, 14)
            Text("A private reading room for the curious. First editions, low light, good company.")
                .font(.system(size: 13)).foregroundColor(muted)
                .multilineTextAlignment(.center).lineSpacing(3).padding(.horizontal, 28)
            Spacer()
            fanMotif.frame(height: 120).clipped()
        }
        .padding(.vertical, 40)
    }

    private var fanMotif: some View {
        ZStack(alignment: .bottom) {
            ForEach(0..<6) { i in
                Circle().trim(from: 0.5, to: 1.0)
                    .stroke(accent.opacity(0.55 - Double(i) * 0.08), lineWidth: 1)
                    .frame(width: 90 + CGFloat(i) * 34, height: 90 + CGFloat(i) * 34)
                    .offset(y: 45 + CGFloat(i) * 17)
            }
            ForEach(0..<7) { i in
                Rectangle().fill(accent.opacity(0.3)).frame(width: 1, height: 110)
                    .rotationEffect(.degrees(Double(i) * 15 - 45), anchor: .bottom)
                    .offset(y: -55)
            }
        }
    }

    // MARK: - Distinctive: the deco fan divider between panels

    private var fanDivider: some View {
        ZStack {
            Rectangle().fill(line).frame(width: 1)
            ZStack {
                ForEach(0..<4) { i in
                    Circle().trim(from: 0.25, to: 0.75)
                        .stroke(accent.opacity(0.7 - Double(i) * 0.15), lineWidth: 1)
                        .frame(width: 34 + CGFloat(i) * 22, height: 34 + CGFloat(i) * 22)
                }
                Circle().fill(accent).frame(width: 8, height: 8)
            }
            .frame(width: 110, height: 110)
        }
        .frame(width: 44)
    }

    // MARK: - Right: sign-in panel

    private var rightPanel: some View {
        VStack(alignment: .leading, spacing: 0) {
            Spacer()
            Text("Welcome back").font(.custom("Cinzel", size: 30)).foregroundColor(ink)
            Text("Sign in to continue your evening.")
                .font(.system(size: 14)).foregroundColor(muted)
                .padding(.top, 8).padding(.bottom, 32)
            fieldLabel("EMAIL")
            TextField("you@example.com", text: $email)
                .font(.system(size: 15)).foregroundColor(ink).tint(accent)
                .textInputAutocapitalization(.never).keyboardType(.emailAddress)
                .padding(.vertical, 10).hairlineBottom().padding(.bottom, 24)
            fieldLabel("PASSWORD")
            SecureField("Your key", text: $password)
                .font(.system(size: 15)).foregroundColor(ink).tint(accent)
                .padding(.vertical, 10).hairlineBottom().padding(.bottom, 16)
            HStack {
                Spacer()
                Button("Forgot your key?") {}
                    .font(.system(size: 13, weight: .medium)).foregroundColor(accent)
            }
            .padding(.bottom, 28)
            Button { signedIn = true } label: {
                Text(signedIn ? "Signed in — enjoy the evening" : "Sign In")
                    .font(.custom("Cinzel", size: 15)).tracking(2).foregroundColor(bg)
                    .frame(maxWidth: .infinity).padding(.vertical, 16)
                    .background(signedIn ? muted : accent)
            }
            .disabled(signedIn)
            Text("Members only. Invitations open each spring.")
                .font(.system(size: 11)).foregroundColor(muted).padding(.top, 20)
            Spacer()
        }
        .padding(.horizontal, 36).padding(.vertical, 40)
    }

    private func fieldLabel(_ text: String) -> some View {
        Text(text).font(.system(size: 10, weight: .semibold)).tracking(2.5)
            .foregroundColor(muted).padding(.bottom, 2)
    }
}

private extension View {
    func hairlineBottom() -> some View {
        overlay(alignment: .bottom) { Rectangle().fill(line).frame(height: 1) }
    }
}

#Preview {
    LoginSplitView()
}
