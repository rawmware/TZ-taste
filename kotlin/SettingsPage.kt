//tz-meta {"id":"kt-settings-page","title":"Settings — Laboratory Specimen Sheet","category":"Kotlin","file":"kotlin/SettingsPage.kt","tags":["kotlin","compose","settings"],"description":"Clinical settings sheet for Specimen, a lab sample tracker: specimen-coded sections, hairline rows, switches and checks. DNA: laboratory-clean.","dnas":["laboratory-clean"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: laboratory-clean — bg #fbfcfd, ink #0f1720, accent #0a7d8c, muted #6b7684, line #dfe4ea.
// Fonts: IBM Plex Sans -> FontFamily.SansSerif, labels in mono -> FontFamily.Monospace.
// Dials: VARIANCE 3 / MOTION 1 / DENSITY 7. Distinctive choice: sections coded like specimen labels (§01).

package tztaste.kotlin

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Checkbox
import androidx.compose.material3.CheckboxDefaults
import androidx.compose.material3.Divider
import androidx.compose.material3.Switch
import androidx.compose.material3.SwitchDefaults
import androidx.compose.material3.Text
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

private val Bg = Color(0xFFFBFCFD)
private val Ink = Color(0xFF0F1720)
private val Accent = Color(0xFF0A7D8C)
private val Muted = Color(0xFF6B7684)
private val Line = Color(0xFFDFE4EA)

@Composable
private fun SectionCode(code: String, title: String) {
    // Distinctive choice: specimen-label section headers.
    Row(verticalAlignment = Alignment.CenterVertically) {
        Text(
            text = code,
            color = Accent,
            fontFamily = FontFamily.Monospace,
            fontSize = 12.sp,
            fontWeight = FontWeight.Bold,
            letterSpacing = 1.sp
        )
        Spacer(Modifier.width(12.dp))
        Text(
            text = title,
            color = Ink,
            fontSize = 13.sp,
            fontWeight = FontWeight.SemiBold,
            letterSpacing = 1.5.sp
        )
        Spacer(Modifier.width(12.dp))
        Divider(modifier = Modifier.weight(1f), thickness = 1.dp, color = Line)
    }
}

@Composable
private fun ToggleRow(label: String, hint: String, checked: Boolean, onChange: (Boolean) -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 10.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Text(text = label, color = Ink, fontSize = 15.sp, fontWeight = FontWeight.Medium)
            Text(text = hint, color = Muted, fontSize = 13.sp)
        }
        Switch(
            checked = checked,
            onCheckedChange = onChange,
            colors = SwitchDefaults.colors(
                checkedTrackColor = Accent,
                checkedThumbColor = Color.White
            )
        )
    }
}

@Composable
private fun CheckRow(label: String, hint: String, checked: Boolean, onChange: (Boolean) -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 10.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Checkbox(
            checked = checked,
            onCheckedChange = onChange,
            colors = CheckboxDefaults.colors(checkedColor = Accent)
        )
        Spacer(Modifier.width(8.dp))
        Column {
            Text(text = label, color = Ink, fontSize = 15.sp, fontWeight = FontWeight.Medium)
            Text(text = hint, color = Muted, fontSize = 13.sp)
        }
    }
}

@Composable
fun SettingsPage() {
    var coldChain by remember { mutableStateOf(true) }
    var autoLabel by remember { mutableStateOf(true) }
    var shareAnon by remember { mutableStateOf(false) }
    var weeklyDigest by remember { mutableStateOf(true) }
    var pushAlerts by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
            .padding(horizontal = 28.dp, vertical = 40.dp)
    ) {
        Text(
            text = "SPECIMEN — SETTINGS",
            color = Muted,
            fontFamily = FontFamily.Monospace,
            fontSize = 12.sp,
            letterSpacing = 2.sp
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = "Bench configuration",
            color = Ink,
            fontSize = 28.sp,
            fontWeight = FontWeight.Bold,
            letterSpacing = (-0.5).sp
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = "Specimen tracks lab samples from intake to result. These settings change how it behaves — nothing here phones home without your say.",
            color = Muted,
            fontSize = 14.sp,
            lineHeight = 21.sp,
            modifier = Modifier.fillMaxWidth(0.85f)
        )
        Spacer(Modifier.height(32.dp))

        SectionCode("§01", "SAMPLE HANDLING")
        Spacer(Modifier.height(8.dp))
        ToggleRow("Cold-chain watch", "Alert if a sample leaves its temperature band.", coldChain) { coldChain = it }
        Divider(thickness = 1.dp, color = Line)
        ToggleRow("Auto-print labels", "Print a bench label on every intake.", autoLabel) { autoLabel = it }
        Divider(thickness = 1.dp, color = Line)
        Spacer(Modifier.height(28.dp))

        SectionCode("§02", "NOTIFICATIONS")
        Spacer(Modifier.height(8.dp))
        CheckRow("Weekly digest", "One email, Monday 07:00. Bench totals only.", weeklyDigest) { weeklyDigest = it }
        Divider(thickness = 1.dp, color = Line)
        CheckRow("Push alerts", "Only for cold-chain breaks. Never marketing.", pushAlerts) { pushAlerts = it }
        Divider(thickness = 1.dp, color = Line)
        Spacer(Modifier.height(28.dp))

        SectionCode("§03", "DATA")
        Spacer(Modifier.height(8.dp))
        ToggleRow("Share anonymized counts", "Helps calibrate our reference ranges. Off by default.", shareAnon) { shareAnon = it }
        Divider(thickness = 1.dp, color = Line)
        Spacer(Modifier.height(24.dp))
        Text(
            text = "Export everything as CSV any time. Deleting your bench deletes it everywhere — there is no soft delete.",
            color = Muted,
            fontSize = 13.sp,
            lineHeight = 19.sp
        )
    }
}
