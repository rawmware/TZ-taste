//tz-meta {"id":"kt-hero-editorial","title":"Hero — Editorial Off-Center","category":"Kotlin","file":"kotlin/HeroEditorial.kt","tags":["kotlin","compose","hero","editorial"],"description":"Asymmetric editorial hero for Commonplace, a read-it-later app: oversized serif claim offset left, narrow meta column, rotated volume numeral. DNA: editorial-serif.","dnas":["editorial-serif"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: editorial-serif — bg #f5f1e8, ink #1c1a15, accent #b5461f, muted #6f6a5e.
// Fonts: display Fraunces -> FontFamily.Serif, body Newsreader -> FontFamily.Serif.
// Dials: VARIANCE 8 / MOTION 2 / DENSITY 3. Distinctive choice: rotated volume numeral.

package tztaste.kotlin

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
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
import androidx.compose.material3.Divider
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFFF5F1E8)
private val Surface = Color(0xFFEFe9DA)
private val Ink = Color(0xFF1C1A15)
private val Accent = Color(0xFFB5461F)
private val Muted = Color(0xFF6F6A5E)
private val Line = Color(0x1C1A1526)

@Composable
fun HeroEditorial() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
            .padding(horizontal = 32.dp, vertical = 40.dp)
    ) {
        // Kicker row: name, hairline, volume.
        Row(verticalAlignment = Alignment.CenterVertically) {
            Text(
                text = "COMMONPLACE",
                color = Accent,
                fontSize = 12.sp,
                letterSpacing = 3.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(Modifier.width(16.dp))
            Divider(modifier = Modifier.weight(1f), thickness = 1.dp, color = Line)
            Spacer(Modifier.width(16.dp))
            Text(text = "VOL. 04", color = Muted, fontSize = 12.sp, letterSpacing = 3.sp)
        }
        Spacer(Modifier.height(56.dp))
        // Asymmetric body: wide claim column, narrow meta column.
        Row {
            Column(modifier = Modifier.weight(2.2f)) {
                Text(
                    text = "Your reading,",
                    color = Ink,
                    fontFamily = FontFamily.Serif,
                    fontWeight = FontWeight.Normal,
                    fontSize = 56.sp,
                    lineHeight = 60.sp,
                    letterSpacing = (-1).sp
                )
                Text(
                    text = "bound like a book.",
                    color = Accent,
                    fontFamily = FontFamily.Serif,
                    fontStyle = androidx.compose.ui.text.font.FontStyle.Italic,
                    fontSize = 56.sp,
                    lineHeight = 60.sp,
                    letterSpacing = (-1).sp
                )
                Spacer(Modifier.height(24.dp))
                Text(
                    text = "Commonplace saves every article you mean to finish and " +
                        "sets it in type worth your attention. No feed. No streaks. " +
                        "Just the next thing you actually want to read.",
                    color = Muted,
                    fontSize = 17.sp,
                    lineHeight = 26.sp,
                    modifier = Modifier.fillMaxWidth(0.85f)
                )
                Spacer(Modifier.height(32.dp))
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Button(
                        onClick = {},
                        colors = ButtonDefaults.buttonColors(containerColor = Ink, contentColor = Bg),
                        shape = androidx.compose.foundation.shape.RoundedCornerShape(2.dp)
                    ) {
                        Text("Start your shelf", fontSize = 15.sp)
                    }
                    Spacer(Modifier.width(16.dp))
                    // Icon note: arrow-right, Lucide, 1.5px stroke.
                    TextButton(onClick = {}) {
                        Text("See a sample spread  →", color = Accent, fontSize = 15.sp)
                    }
                }
            }
            Spacer(Modifier.width(40.dp))
            // Narrow meta column: the distinctive rotated volume numeral.
            Column(
                modifier = Modifier.weight(1f),
                horizontalAlignment = Alignment.End
            ) {
                Text(
                    text = "№ 04",
                    color = Line,
                    fontFamily = FontFamily.Serif,
                    fontSize = 120.sp,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.graphicsLayer { rotationZ = 90f }
                )
                Spacer(Modifier.height(16.dp))
                Divider(thickness = 1.dp, color = Line)
                Spacer(Modifier.height(16.dp))
                Text(
                    text = "Set in Fraunces. Printed on paper-toned pixels. " +
                        "Kept by 4,200 slow readers.",
                    color = Muted,
                    fontSize = 13.sp,
                    lineHeight = 20.sp
                )
            }
        }
    }
}
