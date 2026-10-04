//tz-meta {"id":"dart-cta-deploy","title":"Brutalist Deploy CTA","category":"Dart","file":"dart/cta_deploy.dart","tags":["dart","flutter","cta"],"description":"Industrial-brutalist deploy CTA for Rivet CI: giant stacked Anton headline, safety-orange install button, install one-liner.","dnas":["industrial-brutalist"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFFD8D8D4);
const Color kInk = Color(0xFF141412);
const Color kAccent = Color(0xFFFF4D00);
const Color kMuted = Color(0xFF5C5C58);
const Color kLine = Color(0xFF141412);
const Color kSurface = Color(0xFFC9C9C4);

class RivetCta extends StatelessWidget {
  const RivetCta({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.fromLTRB(32, 64, 32, 56),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(border: Border.all(color: kLine, width: 2)),
            child: const Text('RIVET CI — SELF-HOSTED', style: TextStyle(fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: 2, color: kInk)),
          ),
          const SizedBox(height: 32),
          const Text(
            'SHIP IT\nBEFORE\nLUNCH.',
            style: TextStyle(fontFamily: 'Anton', fontSize: 84, height: 0.95, color: kInk, letterSpacing: -1),
          ),
          const SizedBox(height: 28),
          const SizedBox(
            width: 440,
            child: Text(
              'Rivet runs your pipeline on your own machines. No queues behind strangers, no per-minute billing, no YAML archaeology degree required.',
              style: TextStyle(fontFamily: 'Space Grotesk', fontSize: 17, height: 1.55, color: kMuted),
            ),
          ),
          const SizedBox(height: 36),
          Row(
            children: [
              TextButton(
                style: TextButton.styleFrom(
                  backgroundColor: kAccent,
                  foregroundColor: kBg,
                  padding: const EdgeInsets.symmetric(horizontal: 36, vertical: 18),
                  shape: const RoundedRectangleBorder(borderRadius: BorderRadius.zero),
                ),
                onPressed: () {},
                child: const Text('INSTALL RIVET', style: TextStyle(fontFamily: 'Anton', fontSize: 18, letterSpacing: 1)),
              ),
              const SizedBox(width: 24),
              const Expanded(
                child: Text(
                  'curl -sL rivet.sh | sh\nmedian install: 41 seconds',
                  style: TextStyle(fontFamily: 'JetBrains Mono', fontSize: 13, height: 1.6, color: kInk),
                ),
              ),
            ],
          ),
          const SizedBox(height: 40),
          Container(
            padding: const EdgeInsets.symmetric(vertical: 16),
            decoration: const BoxDecoration(border: Border(top: BorderSide(color: kLine, width: 2))),
            child: const Row(
              children: [
                Icon(Icons.verified_user, color: kInk, size: 18),
                SizedBox(width: 12),
                Expanded(
                  child: Text('Runs air-gapped. Your code never leaves the building.', style: TextStyle(fontFamily: 'Space Grotesk', fontSize: 14, color: kMuted)),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
