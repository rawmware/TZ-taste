//tz-meta {"id":"kt-onboarding-wizard","title":"Onboarding — Calm Three-Step Wizard","category":"Kotlin","file":"kotlin/OnboardingWizard.kt","tags":["kotlin","compose","onboarding","wizard"],"description":"Quiet three-step onboarding for Heim, a home-inventory app: numbered hairline progress segments, one question per step, generous whitespace. DNA: scandi-calm.","dnas":["scandi-calm"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: scandi-calm — bg #faf7f1, ink #2e2a25, accent #a9805a, muted #9a917f, line #e4dccb.
// Fonts: display DM Serif Display -> FontFamily.Serif, body DM Sans -> FontFamily.SansSerif.
// Dials: VARIANCE 3 / MOTION 2 / DENSITY 2. Distinctive choice: progress as numbered hairline segments.

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
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFFFAF7F1)
private val Ink = Color(0xFF2E2A25)
private val Accent = Color(0xFFA9805A)
private val Muted = Color(0xFF9A917F)
private val Line = Color(0xFFE4DCCB)

private val stepTitles = listOf("What should we call home?", "How many rooms?", "When should we remind you?")
private val stepBodies = listOf(
    "Heim keeps a gentle list of what you own and where it lives. First, a name for this place.",
    "A rough count is fine. You can add the attic later — everyone forgets the attic.",
    "One quiet nudge a month to photograph the new things. Nothing more."
)

@Composable
private fun ProgressSegments(current: Int) {
    // Distinctive choice: three hairline segments with numerals, uneven active weight.
    Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
        repeat(3) { i ->
            Column(modifier = Modifier.weight(if (i == current) 1.4f else 1f)) {
                Text(
                    text = "0${i + 1}",
                    color = if (i <= current) Accent else Muted,
                    fontSize = 11.sp,
                    letterSpacing = 2.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(Modifier.height(6.dp))
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(if (i == current) 3.dp else 1.dp)
                        .background(if (i <= current) Accent else Line)
                )
            }
            if (i < 2) Spacer(Modifier.width(12.dp))
        }
    }
}

@Composable
fun OnboardingWizard() {
    var step by remember { mutableStateOf(0) }
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
            .padding(horizontal = 40.dp, vertical = 56.dp)
    ) {
        Text(
            text = "HEIM",
            color = Accent,
            fontSize = 13.sp,
            letterSpacing = 5.sp,
            fontWeight = FontWeight.Bold
        )
        Spacer(Modifier.height(32.dp))
        ProgressSegments(current = step)
        Spacer(Modifier.height(48.dp))
        Text(
            text = stepTitles[step],
            color = Ink,
            fontFamily = FontFamily.Serif,
            fontSize = 36.sp,
            lineHeight = 42.sp
        )
        Spacer(Modifier.height(16.dp))
        Text(
            text = stepBodies[step],
            color = Muted,
            fontSize = 16.sp,
            lineHeight = 25.sp,
            modifier = Modifier.fillMaxWidth(0.7f)
        )
        Spacer(Modifier.height(24.dp))
        // Answer placeholder area: a calm outlined field zone per step.
        Box(
            modifier = Modifier
                .fillMaxWidth(0.7f)
                .height(56.dp)
                .background(Color.White)
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp)
                    .background(Color.Transparent)
            )
            Text(
                text = listOf("e.g. The blue house on Alder", "e.g. 6", "e.g. First Sunday")[step],
                color = Muted,
                fontSize = 15.sp,
                modifier = Modifier.padding(horizontal = 16.dp, vertical = 17.dp)
            )
        }
        Spacer(Modifier.height(40.dp))
        Row(verticalAlignment = Alignment.CenterVertically) {
            Button(
                onClick = { if (step < 2) step++ },
                colors = ButtonDefaults.buttonColors(containerColor = Ink, contentColor = Bg),
                shape = androidx.compose.foundation.shape.RoundedCornerShape(4.dp)
            ) {
                Text(if (step < 2) "Continue" else "Finish setup", fontSize = 15.sp)
            }
            Spacer(Modifier.width(8.dp))
            if (step > 0) {
                TextButton(onClick = { step-- }) {
                    Text("Back", color = Muted, fontSize = 15.sp)
                }
            }
            Spacer(Modifier.weight(1f))
            TextButton(onClick = {}) {
                Text("Skip for now", color = Muted, fontSize = 14.sp)
            }
        }
        Spacer(Modifier.height(32.dp))
        Text(
            text = "Nothing here is a trick. Every answer can be changed later, including skipping.",
            color = Muted,
            fontSize = 13.sp,
            lineHeight = 19.sp,
            modifier = Modifier.fillMaxWidth(0.6f)
        )
    }
}
