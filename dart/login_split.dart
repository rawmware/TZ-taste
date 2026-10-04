//tz-meta {"id":"dart-login-split","title":"Night-Train Split Login","category":"Dart","file":"dart/login_split.dart","tags":["dart","flutter","login"],"description":"Midnight-railway split login for Nightline: brass departures board beside the sign-in form; timetables set with confidence.","dnas":["midnight-railway"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFF101A2E);
const Color kInk = Color(0xFFE9E2D0);
const Color kAccent = Color(0xFFC9A227);
const Color kMuted = Color(0xFF7D8698);
const Color kLine = Color(0xFF2A3A5C);

class NightlineLogin extends StatelessWidget {
  const NightlineLogin({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Expanded(flex: 4, child: _DeparturesBoard()),
          Expanded(
            flex: 5,
            child: Container(
              padding: const EdgeInsets.all(48),
              decoration: const BoxDecoration(border: Border(left: BorderSide(color: kLine))),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text('NIGHTLINE', style: TextStyle(fontFamily: 'Space Mono', fontSize: 12, letterSpacing: 3, color: kAccent)),
                  const SizedBox(height: 16),
                  const Text(
                    'Board the\nnight train.',
                    style: TextStyle(fontFamily: 'DM Serif Display', fontSize: 48, height: 1.05, color: kInk),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    'Sleeper berths across Europe, booked from your phone. Sign in to see tonight\'s departures with your name on them.',
                    style: TextStyle(fontFamily: 'DM Sans', fontSize: 15, height: 1.6, color: kMuted),
                  ),
                  const SizedBox(height: 36),
                  const _RailField(label: 'Email', hint: 'you@example.com', obscure: false),
                  const SizedBox(height: 16),
                  const _RailField(label: 'Password', hint: 'your password', obscure: true),
                  const SizedBox(height: 28),
                  SizedBox(
                    width: double.infinity,
                    child: TextButton(
                      style: TextButton.styleFrom(
                        backgroundColor: kAccent,
                        foregroundColor: kBg,
                        padding: const EdgeInsets.symmetric(vertical: 18),
                        shape: const RoundedRectangleBorder(borderRadius: BorderRadius.zero),
                      ),
                      onPressed: () {},
                      child: const Text('SIGN IN AND PICK A BERTH', style: TextStyle(fontFamily: 'Space Mono', fontSize: 14, letterSpacing: 1)),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Text('New to Nightline? ', style: TextStyle(fontFamily: 'DM Sans', fontSize: 13, color: kMuted)),
                      Text('Create an account', style: TextStyle(fontFamily: 'DM Sans', fontSize: 13, color: kAccent)),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _DeparturesBoard extends StatelessWidget {
  const _DeparturesBoard();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(40),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text('DEPARTURES — TONIGHT', style: TextStyle(fontFamily: 'Space Mono', fontSize: 12, letterSpacing: 2, color: kMuted)),
          SizedBox(height: 24),
          _Departure(time: '21:47', destination: 'VIENNA HBF', status: 'BOARDING', onTime: true),
          _Departure(time: '22:15', destination: 'ZURICH HB', status: 'ON TIME', onTime: true),
          _Departure(time: '23:02', destination: 'MUNICH HBF', status: 'ON TIME', onTime: true),
          _Departure(time: '23:40', destination: 'MILAN C.LE', status: '+18 MIN', onTime: false),
          Spacer(),
          Text(
            'All times local.\nBerths held for 20 minutes after sign-in.',
            style: TextStyle(fontFamily: 'Space Mono', fontSize: 12, height: 1.7, color: kMuted),
          ),
        ],
      ),
    );
  }
}

class _Departure extends StatelessWidget {
  final String time;
  final String destination;
  final String status;
  final bool onTime;
  const _Departure({required this.time, required this.destination, required this.status, required this.onTime});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 14),
      decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: kLine))),
      child: Row(
        children: [
          Text(time, style: const TextStyle(fontFamily: 'Space Mono', fontSize: 18, color: kAccent)),
          const SizedBox(width: 20),
          Expanded(
            child: Text(destination, style: const TextStyle(fontFamily: 'DM Sans', fontSize: 15, letterSpacing: 1, color: kInk)),
          ),
          Text(status, style: TextStyle(fontFamily: 'Space Mono', fontSize: 11, letterSpacing: 1, color: onTime ? kMuted : kAccent)),
        ],
      ),
    );
  }
}

class _RailField extends StatelessWidget {
  final String label;
  final String hint;
  final bool obscure;
  const _RailField({required this.label, required this.hint, required this.obscure});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: const TextStyle(fontFamily: 'Space Mono', fontSize: 11, letterSpacing: 2, color: kMuted)),
        const SizedBox(height: 8),
        TextField(
          obscureText: obscure,
          style: const TextStyle(fontFamily: 'DM Sans', fontSize: 15, color: kInk),
          decoration: InputDecoration(
            hintText: hint,
            hintStyle: const TextStyle(color: kMuted),
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
            enabledBorder: const OutlineInputBorder(borderSide: BorderSide(color: kLine), borderRadius: BorderRadius.zero),
            focusedBorder: const OutlineInputBorder(borderSide: BorderSide(color: kAccent), borderRadius: BorderRadius.zero),
          ),
        ),
      ],
    );
  }
}
