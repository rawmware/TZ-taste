//tz-meta {"id":"dart-onboarding-wizard","title":"Neo-Brutalist Onboarding Wizard","category":"Dart","file":"dart/onboarding_wizard.dart","tags":["dart","flutter","onboarding"],"description":"Sticker-style onboarding wizard for Sprout kids' savings: thick borders, hard shadows, block progress indicator.","dnas":["neo-brutalist-pop"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFFFFF6E9);
const Color kInk = Color(0xFF1A1A1A);
const Color kAccent = Color(0xFFFF5DA2);
const Color kMuted = Color(0xFF6B6259);
const Color kLine = Color(0xFF1A1A1A);
const Color kSurface = Color(0xFFFFFFFF);

class SproutWizard extends StatefulWidget {
  const SproutWizard({super.key});

  @override
  State<SproutWizard> createState() => _SproutWizardState();
}

class _SproutWizardState extends State<SproutWizard> {
  int _step = 0;

  static const List<String> _titles = ['Name your jar', 'Pick a first goal', 'Invite a grown-up'];
  static const List<String> _bodies = [
    'Every saver gets a jar with a name. "Robot Fund" works. So does "Do Not Touch (Seriously)".',
    'One goal keeps saving fun: a skateboard, a game, a trip. Sprout does the weekly math for you.',
    'A parent or guardian approves withdrawals. Kids save, grown-ups guard the vault.',
  ];
  static const List<IconData> _icons = [Icons.savings, Icons.flag, Icons.family_restroom];

  void _next() {
    if (_step < 2) {
      setState(() {
        _step += 1;
      });
    }
  }

  void _back() {
    if (_step > 0) {
      setState(() {
        _step -= 1;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.all(32),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('SPROUT — KIDS SAVINGS', style: TextStyle(fontFamily: 'Space Mono', fontSize: 12, letterSpacing: 2, color: kMuted)),
          const SizedBox(height: 24),
          Row(
            children: List.generate(3, (i) {
              return Expanded(
                child: Container(
                  height: 14,
                  margin: EdgeInsets.only(right: i < 2 ? 10 : 0),
                  decoration: BoxDecoration(
                    color: i <= _step ? kAccent : kSurface,
                    border: Border.all(color: kLine, width: 2),
                  ),
                ),
              );
            }),
          ),
          const SizedBox(height: 32),
          Container(
            padding: const EdgeInsets.all(32),
            decoration: BoxDecoration(
              color: kSurface,
              border: Border.all(color: kLine, width: 3),
              boxShadow: const [BoxShadow(color: kInk, offset: Offset(8, 8))],
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(color: kAccent, border: Border.all(color: kLine, width: 2)),
                  child: Icon(_icons[_step], color: kSurface, size: 30),
                ),
                const SizedBox(height: 24),
                Text('Step ${_step + 1} of 3', style: const TextStyle(fontFamily: 'Space Mono', fontSize: 12, letterSpacing: 2, color: kMuted)),
                const SizedBox(height: 8),
                Text(_titles[_step], style: const TextStyle(fontFamily: 'Archivo Black', fontSize: 34, color: kInk, letterSpacing: -0.5)),
                const SizedBox(height: 14),
                Text(_bodies[_step], style: const TextStyle(fontFamily: 'Space Grotesk', fontSize: 16, height: 1.55, color: kMuted)),
                const SizedBox(height: 32),
                Row(
                  children: [
                    if (_step > 0)
                      OutlinedButton(
                        style: OutlinedButton.styleFrom(
                          foregroundColor: kInk,
                          side: const BorderSide(color: kLine, width: 2),
                          padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 16),
                          shape: const RoundedRectangleBorder(borderRadius: BorderRadius.zero),
                        ),
                        onPressed: _back,
                        child: const Text('BACK'),
                      ),
                    if (_step > 0) const SizedBox(width: 16),
                    Expanded(
                      child: TextButton(
                        style: TextButton.styleFrom(
                          backgroundColor: kInk,
                          foregroundColor: kSurface,
                          padding: const EdgeInsets.symmetric(vertical: 18),
                          shape: const RoundedRectangleBorder(borderRadius: BorderRadius.zero),
                        ),
                        onPressed: _next,
                        child: Text(_step == 2 ? 'OPEN MY JAR' : 'NEXT'),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
