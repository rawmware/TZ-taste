//tz-meta {"id":"dart-stats-terminal","title":"Terminal Stats Panel","category":"Dart","file":"dart/stats_terminal.dart","tags":["dart","flutter","stats"],"description":"Phosphor-green terminal stats readout for Nightjar: dotted leader lines, amber warning line, block cursor.","dnas":["retro-terminal"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFF0B0F0A);
const Color kInk = Color(0xFF33FF66);
const Color kAccent = Color(0xFFFFB000);
const Color kMuted = Color(0xFF1F6B3A);
const Color kLine = Color(0x3333FF66);
const Color kSurface = Color(0xFF0E140D);

class NightjarStats extends StatelessWidget {
  const NightjarStats({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.all(32),
      child: Container(
        padding: const EdgeInsets.all(28),
        decoration: BoxDecoration(color: kSurface, border: Border.all(color: kLine)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('\$ nightjar stats --last 30d', style: TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 14, color: kInk)),
            const SizedBox(height: 24),
            const _StatLine(label: 'deploys', value: '1,284'),
            const _StatLine(label: 'previews served', value: '96,412'),
            const _StatLine(label: 'median build', value: '41s'),
            const _StatLine(label: 'failed builds', value: '3'),
            const SizedBox(height: 16),
            const Text(
              'WARN: 2 builds exceeded the 2m budget — see run 8841',
              style: TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 13, color: kAccent),
            ),
            const SizedBox(height: 24),
            Row(
              children: const [
                Text('\$ ', style: TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 14, color: kInk)),
                _Cursor(),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _StatLine extends StatelessWidget {
  final String label;
  final String value;
  const _StatLine({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        children: [
          Text(label, style: const TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 14, color: kMuted)),
          const SizedBox(width: 12),
          const Expanded(
            child: Text(
              '························',
              style: TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 12, color: kMuted),
            ),
          ),
          const SizedBox(width: 12),
          Text(value, style: const TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: FontWeight.w700, color: kInk)),
        ],
      ),
    );
  }
}

class _Cursor extends StatelessWidget {
  const _Cursor();

  @override
  Widget build(BuildContext context) {
    return Container(width: 10, height: 18, color: kInk);
  }
}
