//tz-meta {"id":"swiftui-onboarding-wizard","title":"Onboarding Wizard","category":"SwiftUI","file":"swiftui/OnboardingWizardView.swift","tags":["swiftui","onboarding"],"description":"Warm 3-step cottage onboarding with a stitched dashed progress path and numbered knots.","dnas":["cottage-warm"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

private let bg = Color(hex: "fbf5ea")
private let ink = Color(hex: "3d3229")
private let accent = Color(hex: "b5533c")
private let muted = Color(hex: "8d7f6e")
private let line = Color(hex: "e7dcc6")

private struct DashLine: Shape {
    func path(in rect: CGRect) -> Path {
        var p = Path()
        p.move(to: CGPoint(x: rect.minX, y: rect.midY))
        p.addLine(to: CGPoint(x: rect.maxX, y: rect.midY))
        return p
    }
}

struct OnboardingWizardView: View {
    @State private var step = 0
    @State private var picks: Set<String> = ["Slow mornings"]
    @State private var entered = false

    private let stepNames = ["Welcome", "Interests", "Settled"]
    private let interests = ["Slow mornings", "Houseplants", "Local markets", "Paper journals", "Weekend baking", "Analog photos"]

    var body: some View {
        VStack(spacing: 0) {
            stitchProgress.padding(.top, 28).padding(.horizontal, 32)
            stepLabels.padding(.top, 10).padding(.horizontal, 32)
            Spacer(minLength: 24)
            stepBody.padding(.horizontal, 32)
            Spacer(minLength: 24)
            bottomBar.padding(.horizontal, 32).padding(.bottom, 36)
        }
        .background(bg.ignoresSafeArea())
        .animation(.easeInOut(duration: 0.3), value: step)
    }

    // MARK: - Stitched progress path with numbered knots

    private var stitchProgress: some View {
        HStack(spacing: 0) {
            ForEach(0..<3, id: \.self) { i in
                knot(index: i)
                if i < 2 {
                    DashLine()
                        .stroke(i < step ? accent : line, style: StrokeStyle(lineWidth: 2, lineCap: .round, dash: [7, 5]))
                        .frame(height: 2)
                }
            }
        }
    }

    private func knot(index i: Int) -> some View {
        let done = i < step
        let current = i == step
        return ZStack {
            Circle().fill(done ? accent : (current ? bg : line))
            Circle().stroke((done || current) ? accent : muted, style: StrokeStyle(lineWidth: 2, dash: [4, 3]))
            Group {
                if done { Image(systemName: "checkmark").font(.system(size: 13, weight: .bold)).foregroundColor(bg) }
                else { Text("\(i + 1)").font(.system(size: 13, weight: .semibold)).foregroundColor(current ? ink : muted) }
            }
        }
        .frame(width: 38, height: 38)
    }

    private var stepLabels: some View {
        HStack(spacing: 0) {
            ForEach(0..<3, id: \.self) { i in
                Text(stepNames[i].uppercased()).font(.system(size: 10, weight: .semibold)).tracking(1.5)
                    .foregroundColor(i == step ? accent : muted).frame(maxWidth: .infinity)
            }
        }
    }

    // MARK: - Steps

    @ViewBuilder
    private var stepBody: some View {
        if step == 0 { welcomeStep } else if step == 1 { interestsStep } else { doneStep }
    }

    private var welcomeStep: some View {
        VStack(alignment: .leading, spacing: 14) {
            Text("Come in, the kettle's on.").font(.custom("DM Serif Display", size: 38)).foregroundColor(ink)
            Text("Hearth is a small corner of the internet for people who like things made slowly. Tell us what you love, and we'll shape your first week around it.")
                .font(.system(size: 16)).foregroundColor(muted).lineSpacing(4)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    private var interestsStep: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("What fills your cup?").font(.custom("DM Serif Display", size: 32)).foregroundColor(ink)
            Text("Pick as many as you like — you can change these anytime, no questions asked.")
                .font(.system(size: 14)).foregroundColor(muted)
            LazyVGrid(columns: [GridItem(.adaptive(minimum: 128), spacing: 10)], spacing: 10) {
                ForEach(interests, id: \.self) { name in
                    let on = picks.contains(name)
                    Button { if on { picks.remove(name) } else { picks.insert(name) } } label: {
                        Text(name)
                            .font(.system(size: 14, weight: .medium))
                            .padding(.vertical, 12).frame(maxWidth: .infinity)
                            .background(on ? accent : Color.clear).foregroundColor(on ? bg : ink)
                            .clipShape(Capsule())
                            .overlay(Capsule().stroke(on ? accent : line, lineWidth: 1.5))
                    }
                    .buttonStyle(.plain)
                }
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    private var doneStep: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("All settled in.").font(.custom("DM Serif Display", size: 38)).foregroundColor(ink)
            Text("You're following \(picks.count) interest\(picks.count == 1 ? "" : "s"). Your first digest arrives Sunday morning — warm, unhurried, and easy to put down.")
                .font(.system(size: 16)).foregroundColor(muted).lineSpacing(4)
            if entered {
                HStack(spacing: 8) {
                    Image(systemName: "checkmark.circle.fill").foregroundColor(accent)
                    Text("Welcome home. We'll see you Sunday.")
                        .font(.system(size: 14, weight: .medium)).foregroundColor(ink)
                }
                .padding(.top, 4)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    // MARK: - Bottom bar

    private var bottomBar: some View {
        HStack {
            if step > 0 {
                Button("Back") { step -= 1 }
                    .font(.system(size: 15, weight: .medium)).foregroundColor(muted)
            }
            Spacer()
            Button(step == 0 ? "Start the tour" : step == 1 ? "Continue" : "Step inside") {
                if step < 2 { step += 1 } else { entered = true } }
            .font(.system(size: 16, weight: .semibold)).foregroundColor(bg)
            .padding(.vertical, 14).padding(.horizontal, 28)
            .background(step == 1 && picks.isEmpty ? muted : accent)
            .clipShape(Capsule())
            .disabled(step == 1 && picks.isEmpty)
        }
    }
}

#Preview {
    OnboardingWizardView()
}
