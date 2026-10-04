//tz-meta {"id":"dart-chat-row","title":"Evidence-Log Chat Rows","category":"Dart","file":"dart/chat_row.dart","tags":["dart","flutter","chat"],"description":"Nordic-noir incident chat rows with a timestamp evidence gutter; hard facts, no comfort bubbles.","dnas":["nordic-noir"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFFDFE3E6);
const Color kInk = Color(0xFF131A24);
const Color kAccent = Color(0xFF3F647F);
const Color kMuted = Color(0xFF7D8994);
const Color kLine = Color(0xFFB9C1C9);

class CairnThread extends StatelessWidget {
  const CairnThread({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.all(32),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text('CAIRN — INCIDENT #2417', style: TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 12, letterSpacing: 2, color: kMuted)),
          SizedBox(height: 8),
          Text('Checkout latency, EU region', style: TextStyle(fontFamily: 'Bebas Neue', fontSize: 40, color: kInk, letterSpacing: 1)),
          SizedBox(height: 28),
          CairnChatRow(
            time: '14:02',
            name: 'Priya Nair',
            role: 'ON-CALL',
            message: 'p99 checkout latency crossed 800ms in eu-west. Error rate still flat — this looks like a queue, not a crash.',
          ),
          CairnChatRow(
            time: '14:07',
            name: 'Tomas Berg',
            role: 'BACKEND',
            message: 'Found it. The discount worker is retrying against a dead Redis replica. Failover ran at 13:58, the worker never got the memo.',
            isAlert: true,
          ),
          CairnChatRow(
            time: '14:11',
            name: 'Priya Nair',
            role: 'ON-CALL',
            message: 'Restarted the worker with the new endpoint. p99 dropping: 640ms and falling. Watching for five minutes.',
          ),
        ],
      ),
    );
  }
}

class CairnChatRow extends StatelessWidget {
  final String time;
  final String name;
  final String role;
  final String message;
  final bool isAlert;
  const CairnChatRow({
    required this.time,
    required this.name,
    required this.role,
    required this.message,
    this.isAlert = false,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: isAlert ? kInk : kBg,
        border: Border.all(color: kLine),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 56,
            child: Text(time, style: TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 13, color: isAlert ? kAccent : kMuted)),
          ),
          Container(
            width: 2,
            color: isAlert ? kAccent : kLine,
            margin: const EdgeInsets.only(right: 16),
            child: const SizedBox(height: 48),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Text(name, style: TextStyle(fontFamily: 'Archivo', fontWeight: FontWeight.w700, fontSize: 15, color: isAlert ? kBg : kInk)),
                    const SizedBox(width: 10),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      color: isAlert ? kAccent : kLine,
                      child: Text(role, style: TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 10, letterSpacing: 1, color: isAlert ? kBg : kInk)),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(message, style: TextStyle(fontFamily: 'DM Sans', fontSize: 15, height: 1.55, color: isAlert ? kBg : kInk)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
