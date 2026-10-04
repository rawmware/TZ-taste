//tz-meta {"id":"swiftui-pricing-honest","title":"PricingHonest","category":"SwiftUI","file":"swiftui/PricingHonestView.swift","tags":["swiftui","pricing"],"description":"Brutal hairline-grid pricing table with an exclusion matrix row and fine-print strip.","dnas":["swiss-rational"]}
import SwiftUI

private extension Color { init(hex: String) { let h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted); var v: UInt64 = 0; Scanner(string: h).scanHexInt64(&v); let r,g,b,a: Double; if h.count == 8 { r=Double((v>>24)&255)/255; g=Double((v>>16)&255)/255; b=Double((v>>8)&255)/255; a=Double(v&255)/255 } else { r=Double((v>>16)&255)/255; g=Double((v>>8)&255)/255; b=Double(v&255)/255; a=1 }; self.init(.sRGB, red:r, green:g, blue:b, opacity:a) } }

struct PricingHonestView: View {
    private let bg = Color(hex: "#fafafa")
    private let ink = Color(hex: "#111111")
    private let accent = Color(hex: "#e30613")
    private let muted = Color(hex: "#6b6b6b")
    private let line = Color(hex: "#111111")
    private let surface = Color(hex: "#f0f0f0")

    private struct Plan {
        let name: String; let price: String; let blurb: String
        let rows: [Bool]   // per feature row: included or not
    }

    private let features = ["Unlimited projects", "Version history", "Shared workspaces", "Priority support", "SSO & audit log"]
    private let plans: [Plan] = [
        Plan(name: "SOLO", price: "$9", blurb: "One person, full toolbox.",
             rows: [true, true, false, false, false]),
        Plan(name: "TEAM", price: "$24", blurb: "Up to ten seats, per seat.",
             rows: [true, true, true, true, false]),
        Plan(name: "STUDIO", price: "$79", blurb: "Unlimited seats, our phone number.",
             rows: [true, true, true, true, true]),
    ]

    private func mark(_ ok: Bool) -> some View {
        Image(systemName: ok ? "checkmark" : "xmark")
            .font(.system(size: 13, weight: .bold))
            .foregroundStyle(ok ? ink : accent)
            .frame(maxWidth: .infinity)
    }

    var body: some View {
        ZStack {
            bg.ignoresSafeArea()
            ScrollView {
                VStack(alignment: .leading, spacing: 0) {
                    Text("PRICING — 03 / TRANSPARENT")
                        .font(.custom("Archivo", size: 12))
                        .tracking(2)
                        .foregroundStyle(muted)
                        .padding(.horizontal, 20)
                    Text("Pay for what\nyou use. Nothing else.")
                        .font(.custom("Archivo", size: 40))
                        .fontWeight(.black)
                        .lineSpacing(2)
                        .foregroundStyle(ink)
                        .padding(.horizontal, 20)
                        .padding(.vertical, 12)

                    // Hairline grid table
                    VStack(spacing: 0) {
                        // Header row
                        HStack(spacing: 0) {
                            Color.clear.frame(maxWidth: .infinity)
                            ForEach(plans, id: \.name) { plan in
                                VStack(spacing: 2) {
                                    Text(plan.name)
                                        .font(.custom("Archivo", size: 12))
                                        .fontWeight(.bold).tracking(1)
                                    Text(plan.price)
                                        .font(.custom("Archivo", size: 22))
                                        .fontWeight(.black)
                                }
                                .frame(maxWidth: .infinity)
                            }
                        }
                        .padding(.vertical, 10)
                        .border(line, width: 1)

                        // Feature rows
                        ForEach(features.indices, id: \.self) { i in
                            HStack(spacing: 0) {
                                Text(features[i])
                                    .font(.custom("Archivo", size: 13))
                                    .foregroundStyle(muted)
                                    .frame(maxWidth: .infinity, alignment: .leading)
                                    .padding(.leading, 12)
                                ForEach(plans, id: \.name) { plan in
                                    self.mark(plan.rows[i])
                                }
                            }
                            .padding(.vertical, 10)
                            .border(line, width: 1)
                        }

                        // EXCLUSION matrix row — the honest one
                        VStack(alignment: .leading, spacing: 8) {
                            Text("NOT INCLUDED — AT ANY PRICE")
                                .font(.custom("Archivo", size: 11))
                                .fontWeight(.bold).tracking(2)
                                .foregroundStyle(accent)
                            HStack(spacing: 6) {
                                Image(systemName: "xmark.circle.fill")
                                    .font(.system(size: 13))
                                    .foregroundStyle(accent)
                                Text("We do not sell your data, run ads, or lock exports behind a tier.")
                                    .font(.custom("Archivo", size: 13))
                                    .foregroundStyle(ink)
                            }
                            HStack(spacing: 6) {
                                Image(systemName: "xmark.circle.fill")
                                    .font(.system(size: 13))
                                    .foregroundStyle(accent)
                                Text("No setup fees, no per-seat onboarding calls, no annual-commitment trap.")
                                    .font(.custom("Archivo", size: 13))
                                    .foregroundStyle(ink)
                            }
                        }
                        .padding(14)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .background(surface)
                        .border(line, width: 1)
                    }
                    .padding(.horizontal, 20)
                    .padding(.top, 8)

                    // Fine-print strip
                    Text("Fine print, printed large: cancel in two taps from the app. We keep your files readable for 90 days after you leave, then delete them. Students and nonprofits pay half — write to billing@ and a human answers within a day.")
                        .font(.custom("Archivo", size: 11))
                        .foregroundStyle(muted)
                        .lineSpacing(4)
                        .padding(20)
                }
            }
        }
    }
}

#Preview { PricingHonestView() }
