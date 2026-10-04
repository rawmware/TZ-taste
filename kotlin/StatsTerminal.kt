//tz-meta {"id":"kt-stats-terminal","title":"Stats — Retro Terminal Readout","category":"Kotlin","file":"kotlin/StatsTerminal.kt","tags":["kotlin","compose","stats","terminal"],"description":"Server stats rendered as a live terminal session for Uptimed monitoring: shell prompt header, mono metric rows, amber alerts, blinking block cursor. DNA: retro-terminal.","dnas":["retro-terminal"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: retro-terminal — bg #0b0f0a, surface #0e140d, ink #33ff66, accent #ffb000, muted #1f6b3a.
// Fonts: IBM Plex Mono -> FontFamily.Monospace everywhere (no Inter).
// Dials: VARIANCE 5 / MOTION 3 / DENSITY 9. Distinctive choice: the whole panel is one shell session.

package tztaste.kotlin

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Divider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFF0B0F0A)
private val Surface = Color(0xFF0E140D)
private val Ink = Color(0xFF33FF66)
private val Accent = Color(0xFFFFB000)
private val Muted = Color(0xFF1F6B3A)
private val Line = Color(0x33FF6633)

@Composable
private fun TermRow(label: String, value: String, alert: Boolean = false) {
    Row(modifier = Modifier.fillMaxWidth().padding(vertical = 6.dp)) {
        Text(
            text = label,
            color = Muted,
            fontFamily = FontFamily.Monospace,
            fontSize = 14.sp,
            modifier = Modifier.width(220.dp)
        )
        Text(
            text = value,
            color = if (alert) Accent else Ink,
            fontFamily = FontFamily.Monospace,
            fontSize = 14.sp,
            fontWeight = if (alert) FontWeight.Bold else FontWeight.Normal
        )
    }
}

@Composable
fun StatsTerminal() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
            .padding(32.dp)
    ) {
        Text(
            text = "UPTIMED — LAST 24H",
            color = Muted,
            fontFamily = FontFamily.Monospace,
            fontSize = 12.sp,
            letterSpacing = 2.sp
        )
        Spacer(Modifier.height(16.dp))
        // Terminal card: one shell session, the distinctive choice.
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .background(Surface)
                .padding(24.dp)
        ) {
            Text(
                text = "uptimed@prod:~\$ status --since 24h",
                color = Ink,
                fontFamily = FontFamily.Monospace,
                fontSize = 15.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(Modifier.height(8.dp))
            Divider(thickness = 1.dp, color = Line)
            Spacer(Modifier.height(8.dp))
            TermRow("uptime", "99.982%")
            TermRow("p99 latency", "184 ms")
            TermRow("requests", "4,281,907")
            TermRow("5xx errors", "312  (0.007%)")
            TermRow("deploys", "14  — 0 rollbacks", alert = true)
            TermRow("certs expiring < 30d", "2  — renew by Fri", alert = true)
            TermRow("cheapest quiet hour", "03:00–04:00 UTC")
            Spacer(Modifier.height(8.dp))
            Divider(thickness = 1.dp, color = Line)
            Spacer(Modifier.height(8.dp))
            Row {
                Text(
                    text = "uptimed@prod:~\$ ",
                    color = Ink,
                    fontFamily = FontFamily.Monospace,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Bold
                )
                // Block cursor; animate alpha in a real app (transform/opacity only).
                Text(
                    text = "▊",
                    color = Accent,
                    fontFamily = FontFamily.Monospace,
                    fontSize = 15.sp
                )
            }
        }
        Spacer(Modifier.height(16.dp))
        Text(
            text = "Uptimed watches your servers and tells you in plain words. " +
                "No dashboards to babysit — it pages you only when a human should look.",
            color = Muted,
            fontFamily = FontFamily.Monospace,
            fontSize = 13.sp,
            lineHeight = 20.sp,
            modifier = Modifier.fillMaxWidth(0.75f)
        )
    }
}
