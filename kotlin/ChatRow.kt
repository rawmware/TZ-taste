//tz-meta {"id":"kt-chat-row","title":"Chat Row — Vertical Sender Names","category":"Kotlin","file":"kotlin/ChatRow.kt","tags":["kotlin","compose","chat","messaging"],"description":"Messaging rows for Kanso chat: sender names set vertically along a hairline timeline, staggered message widths, timestamps in muted mono. DNA: ma-japanese.","dnas":["ma-japanese"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: ma-japanese — bg #f7f4ec, surface #efe9da, ink #26221c, accent #a33327, muted #8a8478.
// Fonts: display Shippori Mincho -> FontFamily.Serif, body Zen Kaku Gothic New -> FontFamily.SansSerif.
// Dials: VARIANCE 6 / MOTION 2 / DENSITY 6. Distinctive choice: sender names rotated vertical beside a hairline.

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
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFFF7F4EC)
private val Surface = Color(0xFFEFE9DA)
private val Ink = Color(0xFF26221C)
private val Accent = Color(0xFFA33327)
private val Muted = Color(0xFF8A8478)
private val Line = Color(0x26221C1F)

@Composable
private fun KansoRow(
    sender: String,
    time: String,
    body: String,
    own: Boolean,
    widthFraction: Float
) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 14.dp),
        verticalAlignment = Alignment.Top
    ) {
        if (!own) {
            // Distinctive choice: vertical sender name along the hairline.
            Text(
                text = sender,
                color = Muted,
                fontSize = 11.sp,
                letterSpacing = 3.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier
                    .graphicsLayer { rotationZ = -90f }
                    .padding(top = 28.dp)
                    .width(90.dp)
            )
            Box(
                modifier = Modifier
                    .width(1.dp)
                    .height(96.dp)
                    .background(if (own) Accent else Line)
            )
            Spacer(Modifier.width(16.dp))
            Column(modifier = Modifier.fillMaxWidth(widthFraction)) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(text = time, color = Muted, fontFamily = FontFamily.Monospace, fontSize = 11.sp)
                    Spacer(Modifier.width(8.dp))
                    Text(text = "— read", color = Muted, fontSize = 11.sp)
                }
                Spacer(Modifier.height(6.dp))
                Text(text = body, color = Ink, fontSize = 15.sp, lineHeight = 23.sp)
            }
        } else {
            Spacer(Modifier.weight(1f))
            Column(
                modifier = Modifier.fillMaxWidth(widthFraction),
                horizontalAlignment = Alignment.End
            ) {
                Text(text = time, color = Muted, fontFamily = FontFamily.Monospace, fontSize = 11.sp)
                Spacer(Modifier.height(6.dp))
                Box(
                    modifier = Modifier
                        .background(Surface)
                        .padding(horizontal = 18.dp, vertical = 12.dp)
                ) {
                    Text(text = body, color = Ink, fontSize = 15.sp, lineHeight = 23.sp)
                }
            }
            Spacer(Modifier.width(16.dp))
            Box(
                modifier = Modifier
                    .width(1.dp)
                    .height(96.dp)
                    .background(Accent)
            )
            Text(
                text = sender,
                color = Accent,
                fontSize = 11.sp,
                letterSpacing = 3.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier
                    .graphicsLayer { rotationZ = 90f }
                    .padding(top = 28.dp)
                    .width(90.dp)
            )
        }
    }
}

@Composable
fun ChatRow() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
            .padding(horizontal = 28.dp, vertical = 36.dp)
    ) {
        Text(
            text = "KANSO — TEA ROOM",
            color = Accent,
            fontSize = 12.sp,
            letterSpacing = 4.sp,
            fontWeight = FontWeight.Bold
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = "A quiet room for two. Messages arrive in order, nothing shouts.",
            color = Muted,
            fontSize = 14.sp,
            modifier = Modifier.fillMaxWidth(0.7f)
        )
        Spacer(Modifier.height(16.dp))
        KansoRow(
            sender = "AKARI",
            time = "21:04",
            body = "The kiln cooled overnight. The ash glaze came out the color of river stones — I saved you the small cup.",
            own = false,
            widthFraction = 0.72f
        )
        KansoRow(
            sender = "YOU",
            time = "21:11",
            body = "Keep it. I will drink from it next time I am in Kyoto and think of this conversation.",
            own = true,
            widthFraction = 0.66f
        )
        KansoRow(
            sender = "AKARI",
            time = "21:12",
            body = "Then it is yours already. I will wrap it in newspaper like my grandmother did.",
            own = false,
            widthFraction = 0.6f
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = "Kanso is a messaging app that treats conversation like correspondence: " +
                "no typing indicators, no read-receipt anxiety, just the words.",
            color = Muted,
            fontSize = 13.sp,
            lineHeight = 20.sp,
            modifier = Modifier.fillMaxWidth(0.75f)
        )
    }
}
