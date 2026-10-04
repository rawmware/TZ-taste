//tz-meta {"id":"dart-features-bento","title":"De Stijl Bento","category":"Dart","file":"dart/features_bento.dart","tags":["dart","flutter","features"],"description":"Asymmetric de-stijl bento for Signalbox: one large red block, two offset blocks. Never three equal cards.","dnas":["de-stijl-grid"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFFFAF8F4);
const Color kInk = Color(0xFF111111);
const Color kAccent = Color(0xFFE3002B);
const Color kMuted = Color(0xFF8C877E);
const Color kLine = Color(0xFF111111);

class SignalboxBento extends StatelessWidget {
  const SignalboxBento({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.all(32),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('WHY SIGNALBOX', style: TextStyle(fontFamily: 'Archivo', fontSize: 12, letterSpacing: 3, color: kMuted)),
          const SizedBox(height: 24),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                flex: 5,
                child: Container(
                  padding: const EdgeInsets.all(32),
                  decoration: const BoxDecoration(
                    color: kAccent,
                    border: Border.fromBorderSide(BorderSide(color: kInk, width: 2)),
                  ),
                  child: const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('01', style: TextStyle(fontFamily: 'Archivo Black', fontSize: 20, color: kBg)),
                      SizedBox(height: 16),
                      Text(
                        'One board.\nFour colors\nof truth.',
                        style: TextStyle(fontFamily: 'Archivo Black', fontSize: 40, height: 1.05, color: kBg),
                      ),
                      SizedBox(height: 16),
                      Text(
                        'Signalbox paints your uptime in blocks you can read across the room: green, amber, red, and the gray of scheduled rest.',
                        style: TextStyle(fontFamily: 'Archivo', fontSize: 15, height: 1.5, color: kBg),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 24),
              Expanded(
                flex: 4,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(24),
                      decoration: BoxDecoration(color: kBg, border: Border.all(color: kLine, width: 2)),
                      child: const Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('02', style: TextStyle(fontFamily: 'Archivo Black', fontSize: 20, color: kAccent)),
                          SizedBox(height: 12),
                          Text(
                            'Blame travels in seconds, not standups.',
                            style: TextStyle(fontFamily: 'Archivo Black', fontSize: 22, height: 1.15, color: kInk),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Every incident pins the change that caused it. Point at the block, ship the fix.',
                            style: TextStyle(fontFamily: 'Archivo', fontSize: 14, height: 1.5, color: kMuted),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24),
                    Container(
                      padding: const EdgeInsets.all(24),
                      decoration: const BoxDecoration(color: kInk),
                      child: const Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('03', style: TextStyle(fontFamily: 'Archivo Black', fontSize: 20, color: kAccent)),
                          SizedBox(height: 12),
                          Text(
                            'Your customers stop asking.',
                            style: TextStyle(fontFamily: 'Archivo Black', fontSize: 22, height: 1.15, color: kBg),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'A public board that answers "is it down?" before the first support ticket lands.',
                            style: TextStyle(fontFamily: 'Archivo', fontSize: 14, height: 1.5, color: kMuted),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
