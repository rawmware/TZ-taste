//tz-meta {"id":"kt-testimonial-wall","title":"Testimonials — Liner Notes Wall","category":"Kotlin","file":"kotlin/TestimonialWall.kt","tags":["kotlin","compose","testimonials"],"description":"Testimonials as Blue Note liner notes for Setlist, a booking tool for jazz clubs: catalog-numbered entries, one oversized pull quote, hairline rules. DNA: jazz-blue-note.","dnas":["jazz-blue-note"]}
// Intended for a Jetpack Compose project; add androidx.compose dependencies.
// DNA: jazz-blue-note — bg #101418, ink #eef2f5, accent #e8734a, muted #7a8a96, line #243038.
// Fonts: display Bebas Neue -> FontFamily.SansSerif (condensed feel), body DM Sans -> SansSerif.
// Dials: VARIANCE 7 / MOTION 2 / DENSITY 5. Distinctive choice: catalog-numbered liner-note entries.

package tztaste.kotlin

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Divider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val Bg = Color(0xFF101418)
private val Ink = Color(0xFFEEF2F5)
private val Accent = Color(0xFFE8734A)
private val Muted = Color(0xFF7A8A96)
private val Line = Color(0xFF243038)

private data class Note(val catalog: String, val quote: String, val name: String, val venue: String)

private val notes = listOf(
    Note("BN-2041", "Friday used to be three spreadsheets and a prayer. Now the room books itself around the music.", "Mara Ellison", "The Copper Reed, Portland"),
    Note("BN-2042", "Our no-shows dropped by half in the first month. The reminder texts read like they came from the door guy.", "Dele Okafor", "Halfnote Cellar, Chicago"),
    Note("BN-2043", "I run a 40-seat room. Setlist treats it like it matters as much as the big halls.", "June Park", "Velvet Static, Seattle"),
    Note("BN-2044", "Soundcheck moved twice last Tuesday and nobody panicked. That has never happened before.", "Theo Lindqvist", "Blue Hour, Stockholm"),
    Note("BN-2045", "The settlement report at 1 a.m. is the whole reason I switched. Clean numbers, no arguments.", "Rosa Jimenez", "La Trompeta, Austin")
)

@Composable
private fun LinerNote(note: Note) {
    Column(modifier = Modifier.fillMaxWidth().padding(vertical = 20.dp)) {
        Row(verticalAlignment = Alignment.Top) {
            Text(
                text = note.catalog,
                color = Accent,
                fontFamily = FontFamily.Monospace,
                fontSize = 12.sp,
                letterSpacing = 1.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.width(88.dp)
            )
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = "\u201C" + note.quote + "\u201D",
                    color = Ink,
                    fontSize = 16.sp,
                    lineHeight = 24.sp,
                    fontStyle = FontStyle.Italic
                )
                Spacer(Modifier.height(8.dp))
                Text(
                    text = note.name + " — " + note.venue,
                    color = Muted,
                    fontSize = 13.sp
                )
            }
        }
    }
    Divider(thickness = 1.dp, color = Line)
}

@Composable
fun TestimonialWall() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Bg)
            .padding(horizontal = 32.dp, vertical = 56.dp)
    ) {
        Text(
            text = "SIDE B —",
            color = Accent,
            fontSize = 13.sp,
            letterSpacing = 3.sp,
            fontWeight = FontWeight.Bold
        )
        Spacer(Modifier.height(12.dp))
        Text(
            text = "What the rooms say",
            color = Ink,
            fontFamily = FontFamily.SansSerif,
            fontWeight = FontWeight.Bold,
            fontSize = 40.sp,
            letterSpacing = 1.sp
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = "Setlist books the gigs, the doors, and the money for small jazz rooms. " +
                "Liner notes from the people running them.",
            color = Muted,
            fontSize = 15.sp,
            modifier = Modifier.fillMaxWidth(0.7f)
        )
        Spacer(Modifier.height(32.dp))
        // Oversized pull quote, offset — not another equal card.
        Text(
            text = "\u201CIt books around the music, not the other way round.\u201D",
            color = Ink,
            fontFamily = FontFamily.SansSerif,
            fontWeight = FontWeight.Bold,
            fontSize = 30.sp,
            lineHeight = 38.sp,
            modifier = Modifier
                .fillMaxWidth(0.85f)
                .padding(start = 48.dp)
        )
        Text(
            text = "— MARA ELLISON, THE COPPER REED",
            color = Accent,
            fontSize = 12.sp,
            letterSpacing = 2.sp,
            modifier = Modifier.padding(start = 48.dp, top = 12.dp)
        )
        Spacer(Modifier.height(32.dp))
        Divider(thickness = 1.dp, color = Line)
        LazyColumn(modifier = Modifier.fillMaxWidth().height(560.dp)) {
            items(notes) { note -> LinerNote(note) }
        }
    }
}
