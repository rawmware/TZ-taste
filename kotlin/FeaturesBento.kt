//tz-meta {"id":"kt-features-bento","title":"Features — Bauhaus Bento","category":"Kotlin","file":"kotlin/FeaturesBento.kt","tags":["kotlin","compose","features","bento"],"description":"Asymmetric bento grid for Gridline, a print-layout tool: one large panel, one tall panel, two small — Bauhaus circle-and-bar motifs, no three equal cards. DNA: bauhaus-primary.","dnas":["bauhaus-primary"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: bauhaus-primary — bg #f4f1ea, ink #1a1a1a, accent #d8342c, muted #6e6a60.
// Fonts: display Archivo Black -> FontFamily.SansSerif (Black), body Archivo -> SansSerif.
// Dials: VARIANCE 8 / MOTION 2 / DENSITY 6. Distinctive choice: Bauhaus geometric motif per panel.

package tztaste.kotlin

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFFF4F1EA)
private val Ink = Color(0xFF1A1A1A)
private val Accent = Color(0xFFD8342C)
private val Muted = Color(0xFF6E6A60)
private val Line = Color(0xFF1A1A1A)

@Composable
private fun MotifCircle() {
    // Motif: solid red circle (Bauhaus), not an emoji icon.
    Box(
        modifier = Modifier
            .size(40.dp)
            .background(Accent, CircleShape)
    )
}

@Composable
private fun MotifBar() {
    // Motif: black bar.
    Box(
        modifier = Modifier
            .width(40.dp)
            .height(10.dp)
            .background(Ink)
    )
}

@Composable
private fun PanelTitle(text: String) {
    Text(
        text = text,
        color = Ink,
        fontFamily = FontFamily.SansSerif,
        fontWeight = FontWeight.Black,
        fontSize = 18.sp,
        letterSpacing = 0.5.sp
    )
}

@Composable
private fun PanelBody(text: String) {
    Spacer(Modifier.height(8.dp))
    Text(text = text, color = Muted, fontSize = 14.sp, lineHeight = 21.sp)
}

@Composable
fun FeaturesBento() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
            .padding(32.dp)
    ) {
        Text(
            text = "Four tools. One grid.",
            color = Ink,
            fontFamily = FontFamily.SansSerif,
            fontWeight = FontWeight.Black,
            fontSize = 34.sp,
            letterSpacing = (-0.5).sp
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = "Gridline is a layout bench for indie publishers — every panel does one job.",
            color = Muted,
            fontSize = 15.sp
        )
        Spacer(Modifier.height(28.dp))
        // Asymmetric bento: large panel + tall column of two small panels.
        Row(modifier = Modifier.fillMaxWidth().height(340.dp)) {
            // Large panel (2x width): the master grid.
            Column(
                modifier = Modifier
                    .weight(1.6f)
                    .fillMaxHeight()
                    .border(2.dp, Line)
                    .background(Color.White)
                    .padding(24.dp)
            ) {
                MotifCircle()
                Spacer(Modifier.height(16.dp))
                PanelTitle("Master grid")
                PanelBody(
                    "A twelve-column canvas with baseline snap. Drop in folios, " +
                        "running heads, and pull quotes — the grid holds them straight."
                )
                Spacer(Modifier.weight(1f))
                Text(text = "01 / MASTER", color = Accent, fontSize = 11.sp, letterSpacing = 2.sp, fontWeight = FontWeight.Bold)
            }
            Spacer(Modifier.width(16.dp))
            // Tall right column: two small panels stacked unevenly.
            Column(modifier = Modifier.weight(1f).fillMaxHeight()) {
                Column(
                    modifier = Modifier
                        .weight(1.25f)
                        .fillMaxWidth()
                        .border(2.dp, Line)
                        .background(Color.White)
                        .padding(20.dp)
                ) {
                    MotifBar()
                    Spacer(Modifier.height(12.dp))
                    PanelTitle("Type ramp")
                    PanelBody("Nine sizes, one ratio. Never pick a font size by eye again.")
                }
                Spacer(Modifier.height(16.dp))
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxWidth()
                        .border(2.dp, Line)
                        .background(Ink)
                        .padding(20.dp)
                ) {
                    Box(
                        modifier = Modifier
                            .size(28.dp)
                            .background(Color.White, CircleShape)
                    )
                    Spacer(Modifier.height(12.dp))
                    Text(
                        text = "Export press",
                        color = Color.White,
                        fontFamily = FontFamily.SansSerif,
                        fontWeight = FontWeight.Black,
                        fontSize = 16.sp
                    )
                    Spacer(Modifier.height(8.dp))
                    Text(
                        text = "Print-ready PDF/X in one tap.",
                        color = Color(0xFFB9B4A8),
                        fontSize = 13.sp,
                        lineHeight = 19.sp
                    )
                }
            }
        }
        Spacer(Modifier.height(16.dp))
        // Wide thin strip panel: the fourth feature breaks the grid on purpose.
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .border(2.dp, Line)
                .background(Accent)
                .padding(horizontal = 24.dp, vertical = 18.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = "04",
                color = Color.White,
                fontFamily = FontFamily.SansSerif,
                fontWeight = FontWeight.Black,
                fontSize = 28.sp
            )
            Spacer(Modifier.width(20.dp))
            Text(
                text = "Proof mode — the page flips to redline and every widowed line confesses.",
                color = Color.White,
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold
            )
        }
    }
}
