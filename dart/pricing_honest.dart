//tz-meta {"id":"dart-pricing-honest","title":"Honest Pricing Table","category":"Dart","file":"dart/pricing_honest.dart","tags":["dart","flutter","pricing"],"description":"Swiss-rational brutal pricing table for Paperstack: two asymmetric tiers with an honest-math footnote, no card grid.","dnas":["swiss-rational"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFFFAFAFA);
const Color kInk = Color(0xFF111111);
const Color kAccent = Color(0xFFE30613);
const Color kMuted = Color(0xFF6B6B6B);
const Color kLine = Color(0xFF111111);
const Color kSurface = Color(0xFFF0F0F0);

class PaperstackPricing extends StatelessWidget {
  const PaperstackPricing({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.all(32),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('PRICING / PAPERSTACK', style: TextStyle(fontFamily: 'Archivo', fontSize: 12, letterSpacing: 3, color: kMuted)),
          const SizedBox(height: 24),
          const Text(
            'Pay once.\nKeep the PDFs.',
            style: TextStyle(fontFamily: 'Archivo', fontWeight: FontWeight.w800, fontSize: 52, height: 1.0, color: kInk, letterSpacing: -1),
          ),
          const SizedBox(height: 16),
          const SizedBox(
            width: 460,
            child: Text(
              'Paperstack merges, splits, redacts, and compresses PDFs. Two plans, no subscriptions, no per-page metering, no surprises in month nine.',
              style: TextStyle(fontFamily: 'Archivo', fontSize: 16, height: 1.55, color: kMuted),
            ),
          ),
          const SizedBox(height: 36),
          const _PlanRow(
            number: '01',
            name: 'READER',
            price: 'Free',
            detail: 'Read, sign, and send any PDF. Yours forever.',
            highlighted: false,
          ),
          const _PlanRow(
            number: '02',
            name: 'STUDIO',
            price: '\$48 once',
            detail: 'Merge, split, redact, compress. No account required. Updates for life.',
            highlighted: true,
          ),
          const SizedBox(height: 28),
          Container(
            padding: const EdgeInsets.all(20),
            decoration: const BoxDecoration(border: Border(left: BorderSide(color: kAccent, width: 4))),
            child: const Text(
              'Honest math: use Paperstack weekly and Studio works out to about \$0.92 a month in year one — then \$0, forever.',
              style: TextStyle(fontFamily: 'Space Mono', fontSize: 13, height: 1.6, color: kInk),
            ),
          ),
        ],
      ),
    );
  }
}

class _PlanRow extends StatelessWidget {
  final String number;
  final String name;
  final String price;
  final String detail;
  final bool highlighted;
  const _PlanRow({
    required this.number,
    required this.name,
    required this.price,
    required this.detail,
    required this.highlighted,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 20),
      decoration: const BoxDecoration(border: Border(top: BorderSide(color: kLine, width: 2))),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(number, style: TextStyle(fontFamily: 'Space Mono', fontSize: 14, color: highlighted ? kAccent : kMuted)),
          const SizedBox(width: 24),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(fontFamily: 'Archivo', fontWeight: FontWeight.w800, fontSize: 24, letterSpacing: 1, color: kInk)),
                const SizedBox(height: 6),
                Text(detail, style: const TextStyle(fontFamily: 'Archivo', fontSize: 14, height: 1.5, color: kMuted)),
              ],
            ),
          ),
          const SizedBox(width: 24),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            color: highlighted ? kInk : kSurface,
            child: Text(price, style: TextStyle(fontFamily: 'Space Mono', fontSize: 15, color: highlighted ? kBg : kInk)),
          ),
        ],
      ),
    );
  }
}
