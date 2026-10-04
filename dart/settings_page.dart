//tz-meta {"id":"dart-settings-page","title":"Docs-Style Settings Page","category":"Dart","file":"dart/settings_page.dart","tags":["dart","flutter","settings"],"description":"Warm documentation-style settings for Margin notes: numbered sections, hairline dividers, mono margin notes.","dnas":["docs-solar"]}
import 'package:flutter/material.dart';

const Color kBg = Color(0xFFFDF6E3);
const Color kInk = Color(0xFF3D3A2E);
const Color kAccent = Color(0xFFCB4B16);
const Color kMuted = Color(0xFF8A8672);
const Color kLine = Color(0x1F3D3A2E);
const Color kSurface = Color(0xFFF7EEDA);

class MarginSettings extends StatelessWidget {
  const MarginSettings({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBg,
      padding: const EdgeInsets.all(32),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text('MARGIN / SETTINGS', style: TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 12, letterSpacing: 2, color: kMuted)),
          SizedBox(height: 12),
          Text(
            'Set up once,\nforget it exists.',
            style: TextStyle(fontFamily: 'Source Serif 4', fontSize: 40, height: 1.1, color: kInk),
          ),
          SizedBox(height: 36),
          _SettingsSection(
            number: '§ 1',
            title: 'Workspace',
            rows: [
              _SettingRow(label: 'Default notebook', hint: 'New notes land here', value: 'Field notes'),
              _SettingRow(label: 'Spellcheck', hint: 'Quiet red squiggles', value: 'On'),
            ],
          ),
          _SettingsSection(
            number: '§ 2',
            title: 'Sync',
            rows: [
              _SettingRow(label: 'Sync on open', hint: 'Pulls before you type', value: 'On'),
              _SettingRow(label: 'Offline copies', hint: 'Keeps everything local too', value: 'On'),
            ],
          ),
          _SettingsSection(
            number: '§ 3',
            title: 'Privacy',
            rows: [
              _SettingRow(label: 'Analytics', hint: 'We would rather not know', value: 'Off'),
              _SettingRow(label: 'Crash reports', hint: 'Anonymous, one ping', value: 'Off'),
            ],
          ),
        ],
      ),
    );
  }
}

class _SettingsSection extends StatelessWidget {
  final String number;
  final String title;
  final List<_SettingRow> rows;
  const _SettingsSection({required this.number, required this.title, required this.rows});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 32),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(number, style: const TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 13, color: kAccent)),
              const SizedBox(width: 12),
              Text(title, style: const TextStyle(fontFamily: 'Source Serif 4', fontSize: 22, color: kInk)),
            ],
          ),
          const SizedBox(height: 12),
          Container(
            decoration: BoxDecoration(color: kSurface, border: Border.all(color: kLine)),
            child: Column(children: rows),
          ),
        ],
      ),
    );
  }
}

class _SettingRow extends StatelessWidget {
  final String label;
  final String hint;
  final String value;
  const _SettingRow({required this.label, required this.hint, required this.value});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
      decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: kLine))),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: const TextStyle(fontFamily: 'Source Serif 4', fontSize: 17, color: kInk)),
                const SizedBox(height: 4),
                Text(hint, style: const TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 12, color: kMuted)),
              ],
            ),
          ),
          const SizedBox(width: 16),
          Text(value, style: const TextStyle(fontFamily: 'IBM Plex Mono', fontSize: 13, color: kAccent)),
          const SizedBox(width: 12),
          const Icon(Icons.chevron_right, color: kMuted, size: 20),
        ],
      ),
    );
  }
}
