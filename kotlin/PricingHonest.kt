//tz-meta {"id":"kt-pricing-honest","title":"Pricing — Honest Poster","category":"Kotlin","file":"kotlin/PricingHonest.kt","tags":["kotlin","compose","pricing"],"description":"Brutally honest two-column pricing for Tallyhouse, freelance invoicing: poster-sized price, hairline feature list, plain-language cancel note. DNA: swiss-rational.","dnas":["swiss-rational"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: swiss-rational — bg #fafafa, surface #f0f0f0, ink #111111, accent #e30613, muted #6b6b6b.
// Fonts: Archivo -> FontFamily.SansSerif only, three weights max.
// Dials: VARIANCE 6 / MOTION 1 / DENSITY 5. Distinctive choice: the price printed like a poster numeral.

package tztaste.kotlin

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Divider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFFFAFAFA)
private val Surface = Color(0xFFF0F0F0)
private val Ink = Color(0xFF111111)
private val Accent = Color(0xFFE30613)
private val Muted = Color(0xFF6B6B6B)
private val Line = Color(0xFF111111)

@Composable
private fun IncludedRow(text: String) {
    Column {
        Row(
            modifier = Modifier.fillMaxWidth().padding(vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Marker: plain plus sign in accent, not an emoji icon.
            Text(text = "+", color = Accent, fontSize = 16.sp, fontWeight = FontWeight.Bold)
            Spacer(Modifier.width(12.dp))
            Text(text = text, color = Ink, fontSize = 15.sp)
        }
        Divider(thickness = 1.dp, color = Color(0xFFE2E2E2))
    }
}

@Composable
fun PricingHonest() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
            .padding(horizontal = 32.dp, vertical = 56.dp)
    ) {
        Text(
            text = "One plan. No tiers to decode.",
            color = Ink,
            fontFamily = FontFamily.SansSerif,
            fontWeight = FontWeight.ExtraBold,
            fontSize = 32.sp,
            letterSpacing = (-0.5).sp
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = "Tallyhouse invoices for freelancers. Here is the whole price, printed large.",
            color = Muted,
            fontSize = 15.sp
        )
        Spacer(Modifier.height(40.dp))
        Row(modifier = Modifier.fillMaxWidth()) {
            // Left: poster-sized price (the distinctive choice).
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = "CHF",
                    color = Muted,
                    fontSize = 14.sp,
                    letterSpacing = 4.sp,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "19",
                    color = Ink,
                    fontFamily = FontFamily.SansSerif,
                    fontWeight = FontWeight.Black,
                    fontSize = 160.sp,
                    lineHeight = 150.sp,
                    letterSpacing = (-4).sp
                )
                Text(
                    text = "per month, flat. Not per invoice, not per client, not per seat.",
                    color = Muted,
                    fontSize = 14.sp,
                    lineHeight = 21.sp,
                    modifier = Modifier.fillMaxWidth(0.8f)
                )
                Spacer(Modifier.height(24.dp))
                Button(
                    onClick = {},
                    colors = ButtonDefaults.buttonColors(containerColor = Accent, contentColor = Color.White),
                    shape = androidx.compose.foundation.shape.RoundedCornerShape(0.dp),
                    modifier = Modifier.fillMaxWidth(0.8f)
                ) {
                    Text("Start invoicing", fontSize = 15.sp, fontWeight = FontWeight.Bold)
                }
                Spacer(Modifier.height(16.dp))
                Text(
                    text = "Cancel in one tap. Your invoices stay readable forever, " +
                        "paid plan or not. That part is not a trial.",
                    color = Muted,
                    fontSize = 13.sp,
                    lineHeight = 19.sp,
                    modifier = Modifier.fillMaxWidth(0.8f)
                )
            }
            Spacer(Modifier.width(48.dp))
            // Right: narrow included-list column on surface.
            Column(
                modifier = Modifier
                    .weight(0.9f)
                    .background(Surface)
                    .padding(28.dp)
            ) {
                Text(
                    text = "EVERYTHING INCLUDED",
                    color = Ink,
                    fontSize = 12.sp,
                    letterSpacing = 2.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(Modifier.height(8.dp))
                IncludedRow("Unlimited invoices and estimates")
                IncludedRow("Late-payment reminders that sound like you")
                IncludedRow("VAT-ready exports your accountant will open")
                IncludedRow("Client portal — they pay, you get told")
                IncludedRow("No card required for the first 30 days")
                Spacer(Modifier.height(16.dp))
                Text(
                    text = "What costs extra: nothing. We looked.",
                    color = Accent,
                    fontSize = 13.sp,
                    fontWeight = FontWeight.Bold
                )
            }
        }
    }
}
