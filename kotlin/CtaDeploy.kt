//tz-meta {"id":"kt-cta-deploy","title":"CTA — Industrial Deploy Banner","category":"Kotlin","file":"kotlin/CtaDeploy.kt","tags":["kotlin","compose","cta"],"description":"Brutalist deploy CTA for Dockhand pipelines: concrete slab, Anton-weight type, safety-orange action, hazard-stripe rule. DNA: industrial-brutalist.","dnas":["industrial-brutalist"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: industrial-brutalist — bg #d8d8d4, surface #c9c9c4, ink #141412, accent #ff4d00, muted #5c5c58.
// Fonts: display Anton -> FontFamily.SansSerif (Black), body Space Grotesk -> SansSerif.
// Dials: VARIANCE 7 / MOTION 2 / DENSITY 4. Distinctive choice: hazard-stripe rule built from boxes.

package tztaste.kotlin

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFFD8D8D4)
private val Surface = Color(0xFFC9C9C4)
private val Ink = Color(0xFF141412)
private val Accent = Color(0xFFFF4D00)
private val Muted = Color(0xFF5C5C58)

@Composable
private fun HazardStripe() {
    // Distinctive choice: hazard rule from alternating boxes (ink / safety orange).
    Row(modifier = Modifier.fillMaxWidth().height(14.dp)) {
        repeat(24) { i ->
            Box(
                modifier = Modifier
                    .weight(1f)
                    .height(14.dp)
                    .background(if (i % 2 == 0) Ink else Accent)
            )
        }
    }
}

@Composable
fun CtaDeploy() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
    ) {
        HazardStripe()
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 32.dp, vertical = 48.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column(modifier = Modifier.weight(1.5f)) {
                Text(
                    text = "DOCKHAND",
                    color = Muted,
                    fontSize = 13.sp,
                    letterSpacing = 4.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(Modifier.height(12.dp))
                Text(
                    text = "SHIP IT.",
                    color = Ink,
                    fontFamily = FontFamily.SansSerif,
                    fontWeight = FontWeight.Black,
                    fontSize = 84.sp,
                    lineHeight = 80.sp,
                    letterSpacing = (-2).sp
                )
                Text(
                    text = "THEN GO HOME.",
                    color = Accent,
                    fontFamily = FontFamily.SansSerif,
                    fontWeight = FontWeight.Black,
                    fontSize = 84.sp,
                    lineHeight = 80.sp,
                    letterSpacing = (-2).sp
                )
                Spacer(Modifier.height(20.dp))
                Text(
                    text = "Dockhand runs your deploys the boring way: same steps, every time, " +
                        "with a log you can actually read. 12,400 pushes last week. Zero 3 a.m. pages.",
                    color = Muted,
                    fontSize = 16.sp,
                    lineHeight = 24.sp,
                    modifier = Modifier.fillMaxWidth(0.8f)
                )
            }
            Spacer(Modifier.width(48.dp))
            // Offset action slab — asymmetric, off the type axis.
            Column(
                modifier = Modifier
                    .weight(1f)
                    .background(Surface)
                    .padding(28.dp),
                horizontalAlignment = Alignment.Start
            ) {
                Text(
                    text = "UNIT 07",
                    color = Muted,
                    fontSize = 12.sp,
                    letterSpacing = 3.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(Modifier.height(12.dp))
                Text(
                    text = "Connect your repo. First deploy lands in under ten minutes.",
                    color = Ink,
                    fontSize = 15.sp,
                    lineHeight = 22.sp,
                    fontWeight = FontWeight.SemiBold
                )
                Spacer(Modifier.height(20.dp))
                Button(
                    onClick = {},
                    colors = ButtonDefaults.buttonColors(containerColor = Accent, contentColor = Color.White),
                    shape = androidx.compose.foundation.shape.RoundedCornerShape(0.dp),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    // Icon note: arrow-right, Lucide, 2px stroke.
                    Text("Start deploying  →", fontSize = 16.sp, fontWeight = FontWeight.Bold)
                }
                Spacer(Modifier.height(12.dp))
                Text(
                    text = "Free for side projects. No card.",
                    color = Muted,
                    fontSize = 13.sp
                )
            }
        }
        HazardStripe()
    }
}
