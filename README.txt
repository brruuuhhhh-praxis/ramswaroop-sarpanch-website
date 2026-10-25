दो फोटो वाला सीमित वेबसाइट पैच

इस bundle में:
- public/candidate-face.png : नाम के पास मौजूदा गोल फ्रेम में चेहरा
- public/candidate-full.png : ग्रामीणों के संदेश के पास पूरी बॉडी वाली transparent PNG
- apply_candidate_photo_patch.py : केवल HomePage में फोटो स्रोत/मैसेज लेआउट और सीमित CSS जोड़ने का पैच

इस्तेमाल:
1. इस ZIP को प्रोजेक्ट की root directory में extract करें (जहाँ package.json है)। Merge/overwrite पूछे तो bundled public assets रखें; src/App.jsx या src/App.css इस ZIP में नहीं हैं।
2. Termux में cd ~/projects/ramswaroop-sarpanch-v12-netlify-ready
3. python apply_candidate_photo_patch.py
4. npm run build
5. बिल्ड सफल होने पर dev server चलाएँ/ब्राउज़र refresh करें।

पैच खुद src/App.jsx और src/App.css की dated backups बनाता है, और केवल Homepage के संबंधित हिस्से बदलता है।
