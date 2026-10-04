//tz-meta {"id":"dart-testimonial-wall","title":"Zine Testimonial Wall","category":"Dart","file":"dart/testimonial_wall.dart","tags":["dart","flutter","testimonials"],"description":"Risograph zine testimonial cards with misregistered accent shadows, catalog numbers, and staggered indents. No card grid.","dnas":["risograph-grain"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFFF5EEDD);
const Color kInk = Color(0xFF26413C);
const Color kAccent = Color(0xFF117D78);
const Color kMuted = Color(0xFF8D8A76);
const Color kLine = Color(0xFFD8CFAE);

class SteepWall extends StatelessWidget {
  const SteepWall({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.all(32),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text('LOVE LETTERS / STEEP TEA CLUB', style: TextStyle(fontFamily: 'Space Mono', fontSize: 12, letterSpacing: 2, color: kMuted)),
          SizedBox(height: 12),
          Text(
            'Filed under\n"worth it".',
            style: TextStyle(fontFamily: 'Archivo Black', fontSize: 44, height: 1.05, color: kInk, letterSpacing: -1),
          ),
          SizedBox(height: 32),
          _ZineCard(
            catalog: 'RISO-014',
            quote: 'The smoky oolong showed up on a Tuesday and rearranged my whole workday. I cancelled two subscriptions to keep this one.',
            name: 'Mara Voss',
            detail: 'member since 2024 · Portland',
            indent: 0,
          ),
          _ZineCard(
            catalog: 'RISO-015',
            quote: 'I buy tea for a restaurant. Steep is the only club whose tasting notes I have ever believed.',
            name: 'Daniel Okafor',
            detail: 'member since 2023 · Chicago',
            indent: 56,
          ),
          _ZineCard(
            catalog: 'RISO-016',
            quote: 'My grandmother drank this exact dan cong in Guangzhou. I did not expect a subscription box to make me cry.',
            name: 'Lin Zhao',
            detail: 'member since 2025 · Seattle',
            indent: 24,
          ),
        ],
      ),
    );
  }
}

class _ZineCard extends StatelessWidget {
  final String catalog;
  final String quote;
  final String name;
  final String detail;
  final double indent;
  const _ZineCard({
    required this.catalog,
    required this.quote,
    required this.name,
    required this.detail,
    required this.indent,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: 28, left: indent),
      child: Container(
        padding: const EdgeInsets.all(28),
        decoration: BoxDecoration(
          color: kBg,
          border: Border.all(color: kInk, width: 2),
          boxShadow: const [BoxShadow(color: kAccent, offset: Offset(8, 8))],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(catalog, style: const TextStyle(fontFamily: 'Space Mono', fontSize: 11, letterSpacing: 2, color: kAccent)),
            const SizedBox(height: 14),
            Text('"$quote"', style: const TextStyle(fontFamily: 'Space Grotesk', fontSize: 17, height: 1.55, color: kInk)),
            const SizedBox(height: 18),
            Container(height: 1, color: kLine),
            const SizedBox(height: 14),
            Text(name, style: const TextStyle(fontFamily: 'Archivo Black', fontSize: 14, color: kInk)),
            const SizedBox(height: 4),
            Text(detail, style: const TextStyle(fontFamily: 'Space Mono', fontSize: 12, color: kMuted)),
          ],
        ),
      ),
    );
  }
}
