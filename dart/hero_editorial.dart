//tz-meta {"id":"dart-hero-editorial","title":"Editorial Hero","category":"Dart","file":"dart/hero_editorial.dart","tags":["dart","flutter","hero"],"description":"Offset editorial hero for Ledgerline: hairline masthead, oversized Fraunces headline, rule-framed facts strip. No template hero.","dnas":["editorial-serif"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFFF5F1E8);
const Color kInk = Color(0xFF1C1A15);
const Color kAccent = Color(0xFFB5461F);
const Color kMuted = Color(0xFF6F6A5E);
const Color kLine = Color(0x261C1A15);
const Color kSurface = Color(0xFFEFE9DA);

class EditorialHero extends StatelessWidget {
  const EditorialHero({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.fromLTRB(32, 72, 32, 48),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: const [
              Icon(Icons.north_east, color: kAccent, size: 20),
              SizedBox(width: 12),
              Expanded(child: Divider(color: kLine, thickness: 1)),
              SizedBox(width: 12),
              Text('EST. 2026 · ISSUE No. 04', style: TextStyle(color: kMuted, fontSize: 11, letterSpacing: 2)),
            ],
          ),
          const SizedBox(height: 40),
          const Text(
            'Your money,\nin sentences\nnot spreadsheets.',
            style: TextStyle(fontFamily: 'Fraunces', fontSize: 56, height: 1.02, color: kInk, letterSpacing: -1.5),
          ),
          const SizedBox(height: 28),
          const SizedBox(
            width: 420,
            child: Text(
              'Ledgerline is a budgeting app for illustrators who invoice in bursts and spend in drips. It writes the month back to you in plain language.',
              style: TextStyle(fontFamily: 'Newsreader', fontSize: 18, height: 1.5, color: kInk),
            ),
          ),
          const SizedBox(height: 40),
          Row(
            children: [
              _EditorialButton(label: 'Read a sample month', onTap: () {}),
              const SizedBox(width: 20),
              const Text('Free for 60 days', style: TextStyle(color: kMuted, fontSize: 13)),
            ],
          ),
          const SizedBox(height: 56),
          Container(
            padding: const EdgeInsets.symmetric(vertical: 16),
            decoration: const BoxDecoration(
              border: Border(top: BorderSide(color: kLine), bottom: BorderSide(color: kLine)),
            ),
            child: Row(
              children: const [
                _RuleFact(number: '2,140', label: 'illustrators reading their money this way'),
                SizedBox(width: 32),
                _RuleFact(number: '11 min', label: 'median monthly check-in'),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _EditorialButton extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const _EditorialButton({required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        backgroundColor: kInk,
        foregroundColor: kBg,
        padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 16),
        shape: const RoundedRectangleBorder(borderRadius: BorderRadius.zero),
      ),
      onPressed: onTap,
      child: Text(label, style: const TextStyle(fontSize: 15, letterSpacing: 0.3)),
    );
  }
}

class _RuleFact extends StatelessWidget {
  final String number;
  final String label;
  const _RuleFact({required this.number, required this.label});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(number, style: const TextStyle(fontFamily: 'Fraunces', fontSize: 30, color: kAccent, letterSpacing: -0.5)),
          const SizedBox(height: 6),
          Text(label, style: const TextStyle(color: kMuted, fontSize: 13)),
        ],
      ),
    );
  }
}
