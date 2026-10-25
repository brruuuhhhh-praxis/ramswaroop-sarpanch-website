import { Waves, Leaf, Users, Landmark, ShieldCheck, HeartHandshake } from 'lucide-react';

export const CANDIDATE_NAME = 'श्री रामस्वरूप बरोड';
export const CANDIDATE_PHOTO = '/ramswaroop-bror.png';
export const VILLAGE = 'किकर वाली जोहड़ी';
export const LOCATION = 'तहसील सूरतगढ़, राजस्थान';
export const PHONE = '917568118606';
export const WHATSAPP_GROUP = 'https://chat.whatsapp.com/BRxXAXcJ8wd3xZSZPUAHxX?s=cl&p=a&mlu=4&ilr=4';

export const navItems = [
  ['परिचय', '/parichay'],
  ['विकास के मुद्दे', '/mudde'],
  ['संपर्क', '/sampark'],
];

export const focusAreas = [
  {
    no: '01', icon: Waves, title: 'पानी और स्वच्छता',
    text: 'पेयजल, साफ-सफाई और जल निकासी से जुड़ी स्थानीय जरूरतों को प्राथमिकता।',
    tag: 'बुनियादी सुविधाएँ'
  },
  {
    no: '02', icon: Leaf, title: 'सड़कें और रोशनी',
    text: 'गांव की सड़कों, गलियों और सार्वजनिक स्थानों की समस्याओं पर व्यवस्थित काम।',
    tag: 'बेहतर आवागमन'
  },
  {
    no: '03', icon: Users, title: 'युवा और अवसर',
    text: 'युवाओं, महिलाओं और बुजुर्गों की बात सुनने के लिए संवाद और सहभागिता।',
    tag: 'सभी की भागीदारी'
  },
  {
    no: '04', icon: Landmark, title: 'पारदर्शी पंचायत',
    text: 'स्थानीय जरूरतों, उपलब्ध संसाधनों और कार्यों की जानकारी लोगों तक पहुंचाने पर जोर।',
    tag: 'जवाबदेही'
  },
  {
    no: '05', icon: ShieldCheck, title: 'योजनाओं की जानकारी',
    text: 'पात्र परिवारों तक सरकारी योजनाओं की जानकारी और आवेदन प्रक्रिया में सहयोग।',
    tag: 'जन-सहयोग'
  },
  {
    no: '06', icon: HeartHandshake, title: 'जन-सुनवाई',
    text: 'गांव की समस्याएं सुनने और संबंधित विभागों तक पहुंचाने के लिए संवाद का रास्ता।',
    tag: 'लोग पहले'
  },
];

export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
