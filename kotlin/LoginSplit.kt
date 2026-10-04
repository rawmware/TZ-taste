//tz-meta {"id":"kt-login-split","title":"Login — Midnight Railway Split","category":"Kotlin","file":"kotlin/LoginSplit.kt","tags":["kotlin","compose","login","auth"],"description":"Split-screen sign-in for Nightline, a night-shift community: serif wordmark with departure-board detail on the left, honest form on the right. DNA: midnight-railway.","dnas":["midnight-railway"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: midnight-railway — bg #101a2e, ink #e9e2d0, accent #c9a227, muted #7d8698, line #2a3a5c.
// Fonts: display DM Serif Display -> FontFamily.Serif, body DM Sans -> FontFamily.SansSerif.
// Dials: VARIANCE 6 / MOTION 1 / DENSITY 4. Distinctive choice: departure-board session line.

package tztaste.kotlin

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Divider
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
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
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFF101A2E)
private val Ink = Color(0xFFE9E2D0)
private val Accent = Color(0xFFC9A227)
private val Muted = Color(0xFF7D8698)
private val Line = Color(0xFF2A3A5C)

@Composable
private fun BoardLine(label: String, value: String) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = label,
            color = Muted,
            fontFamily = FontFamily.Monospace,
            fontSize = 11.sp,
            letterSpacing = 2.sp,
            modifier = Modifier.width(140.dp)
        )
        Text(
            text = value,
            color = Ink,
            fontFamily = FontFamily.Monospace,
            fontSize = 13.sp,
            letterSpacing = 1.sp
        )
    }
}

@Composable
private fun NightField(label: String, value: String, onChange: (String) -> Unit, secret: Boolean = false) {
    Text(
        text = label,
        color = Muted,
        fontSize = 12.sp,
        letterSpacing = 2.sp,
        fontWeight = FontWeight.Bold
    )
    Spacer(Modifier.height(6.dp))
    TextField(
        value = value,
        onValueChange = onChange,
        singleLine = true,
        visualTransformation = if (secret) PasswordVisualTransformation() else androidx.compose.ui.text.input.VisualTransformation.None,
        colors = TextFieldDefaults.colors(
            focusedContainerColor = Color(0xFF16233C),
            unfocusedContainerColor = Color(0xFF16233C),
            focusedTextColor = Ink,
            unfocusedTextColor = Ink,
            focusedIndicatorColor = Accent,
            unfocusedIndicatorColor = Line,
            cursorColor = Accent
        ),
        modifier = Modifier.fillMaxWidth()
    )
    Spacer(Modifier.height(20.dp))
}

@Composable
fun LoginSplit() {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
    ) {
        // Left: brand panel with departure-board detail.
        Column(
            modifier = Modifier
                .weight(1f)
                .fillMaxHeight()
                .padding(horizontal = 40.dp, vertical = 56.dp)
        ) {
            Text(
                text = "NIGHTLINE",
                color = Ink,
                fontFamily = FontFamily.Serif,
                fontSize = 44.sp,
                letterSpacing = 1.sp
            )
            Spacer(Modifier.height(8.dp))
            Text(
                text = "The community for people who work while the city sleeps.",
                color = Muted,
                fontSize = 15.sp,
                lineHeight = 23.sp,
                modifier = Modifier.fillMaxWidth(0.85f)
            )
            Spacer(Modifier.weight(1f))
            // Distinctive choice: departure-board session line.
            Divider(thickness = 1.dp, color = Line)
            Spacer(Modifier.height(12.dp))
            BoardLine("NEXT TRAIN", "07:42 — PLATFORM 3")
            BoardLine("SHIFT ENDS", "IN 2H 18M")
            BoardLine("ONLINE NOW", "1,208 NIGHT OWLS")
            Spacer(Modifier.height(12.dp))
            Divider(thickness = 1.dp, color = Line)
        }
        // Right: the form, separated by a hairline, offset lower.
        Box(
            modifier = Modifier
                .weight(1f)
                .background(Color(0xFF0C1424))
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 48.dp, vertical = 72.dp)
            ) {
                Text(
                    text = "Sign back in",
                    color = Ink,
                    fontFamily = FontFamily.Serif,
                    fontSize = 30.sp
                )
                Spacer(Modifier.height(8.dp))
                Text(
                    text = "Your crew is already swapping shift notes.",
                    color = Muted,
                    fontSize = 14.sp
                )
                Spacer(Modifier.height(32.dp))
                NightField("EMAIL", email, { email = it })
                NightField("PASSWORD", password, { password = it }, secret = true)
                Button(
                    onClick = {},
                    colors = ButtonDefaults.buttonColors(containerColor = Accent, contentColor = Bg),
                    shape = androidx.compose.foundation.shape.RoundedCornerShape(2.dp),
                    modifier = Modifier.fillMaxWidth().height(52.dp)
                ) {
                    Text("Enter Nightline", fontSize = 16.sp, fontWeight = FontWeight.Bold)
                }
                Spacer(Modifier.height(12.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    TextButton(onClick = {}) {
                        Text("Forgot password?", color = Muted, fontSize = 14.sp)
                    }
                    Spacer(Modifier.weight(1f))
                    TextButton(onClick = {}) {
                        Text("New here? Join", color = Accent, fontSize = 14.sp, fontWeight = FontWeight.Bold)
                    }
                }
                Spacer(Modifier.height(24.dp))
                Text(
                    text = "We never sell your data. Night shifts are hard enough without that.",
                    color = Muted,
                    fontSize = 12.sp,
                    lineHeight = 18.sp
                )
            }
        }
    }
}
