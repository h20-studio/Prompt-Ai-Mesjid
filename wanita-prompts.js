// ============================================
// 👩 Wanita Muda Character — Prompt Generator
// Adapts nenek prompts → wanita muda (20-25 tahun, cantik, berkerudung)
// ============================================

(function injectWanitaPrompts() {
    // ─── Image prompt replacements ───
    const IMAGE_REPLACEMENTS = [
        // Age & description patterns for nenek
        [/a 6[0-9]-year-old Indonesian elderly woman \(nenek\)/gi, 'a beautiful 22-year-old Indonesian young woman'],
        [/a 6[0-9]-year-old Indonesian elderly woman/gi, 'a beautiful 22-year-old Indonesian young woman'],
        [/an? \d+-year-old Indonesian elderly woman/gi, 'a beautiful 22-year-old Indonesian young woman'],
        // Clothing — hijab colors kept, kebaya → modern modest fashion
        [/wearing a [^,]+ hijab and a [^,]+ kebaya[^,]*/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'elegant cream';
            return `wearing a ${color} hijab and a stylish modern modest blouse with elegant embroidery`;
        }],
        [/wearing a [^,]+ hijab and a [^,]+ batik blouse/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'soft cream';
            return `wearing a ${color} hijab and a trendy batik-patterned tunic`;
        }],
        [/wearing a [^,]+ hijab and a [^,]+ batik dress/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'pastel';
            return `wearing a ${color} hijab and a modern batik-print maxi dress`;
        }],
        [/wearing a [^,]+ hijab and a [^,]+ cotton blouse/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'white';
            return `wearing a ${color} hijab and a chic linen blouse`;
        }],
        [/wearing a [^,]+ hijab and a [^,]+ silk blouse/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'ivory';
            return `wearing a ${color} hijab and a flowing silk blouse`;
        }],
        [/wearing a [^,]+ hijab and a [^,]+ blouse/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'cream';
            return `wearing a ${color} hijab and a modern modest blouse`;
        }],
        [/wearing a [^,]+ hijab and a [^,]+ dress/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'pastel';
            return `wearing a ${color} hijab and an elegant modest dress`;
        }],
        [/wearing a [^,]+ hijab and [^,]+ cardigan/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'white';
            return `wearing a ${color} hijab and a cozy knit cardigan`;
        }],
        [/wearing a [^,]+ hijab and [^,]+ vest/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'neutral';
            return `wearing a ${color} hijab and a fashionable modest vest`;
        }],
        // Posture & action — more youthful
        [/sitting on a woven bamboo mat/gi, 'sitting gracefully on a woven bamboo mat'],
        [/sitting on the veranda/gi, 'sitting elegantly on the veranda'],
        [/sitting at a wooden table/gi, 'sitting at a rustic wooden table'],
        [/sitting beside/gi, 'sitting gracefully beside'],
        [/Her weathered hands/gi, 'Her delicate hands'],
        [/gently cradling/gi, 'carefully presenting'],
        [/She is gently holding/gi, 'She is gracefully holding'],
        [/She is gently presenting/gi, 'She is elegantly presenting'],
        [/She is proudly presenting/gi, 'She is radiantly presenting'],
        [/She is proudly showcasing/gi, 'She is cheerfully showcasing'],
        [/She is presenting/gi, 'She is beautifully presenting'],
        [/She is displaying/gi, 'She is proudly displaying'],
        [/She is cheerfully presenting/gi, 'She is joyfully presenting'],
        [/She smiles warmly/gi, 'She smiles radiantly, her youthful beauty glowing'],
        [/She is smiling warmly/gi, 'She is smiling radiantly with youthful charm'],
        // Appearance — youthful details
        [/\(nenek\)/gi, ''],
        [/nenek/gi, 'the young woman'],
    ];

    // ─── Video prompt replacements ───
    const VIDEO_REPLACEMENTS = [
        // Age & description
        [/a 6[0-9]-year-old Indonesian elderly woman \(nenek\)/gi, 'a beautiful 22-year-old Indonesian young woman'],
        [/a 6[0-9]-year-old Indonesian elderly woman/gi, 'a beautiful 22-year-old Indonesian young woman'],
        [/an? \d+-year-old Indonesian elderly woman \(nenek\)/gi, 'a beautiful 22-year-old Indonesian young woman'],
        [/an? \d+-year-old Indonesian elderly woman/gi, 'a beautiful 22-year-old Indonesian young woman'],
        // Clothing for video
        [/wearing a [^,]+ hijab and [^,]+ batik dress/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'cream';
            return `wearing a ${color} hijab and a modern batik tunic`;
        }],
        [/wearing a [^,]+ hijab and [^,]+ kebaya/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'soft pink';
            return `wearing a ${color} hijab and a contemporary modest blouse`;
        }],
        [/wearing a [^,]+ hijab and [^,]+ batik blouse/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'cream';
            return `wearing a ${color} hijab and a stylish batik tunic`;
        }],
        [/wearing a [^,]+ hijab and [^,]+ batik/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'cream';
            return `wearing a ${color} hijab and a trendy batik outfit`;
        }],
        [/wearing a [^,]+ hijab and [^,]+ blouse/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'cream';
            return `wearing a ${color} hijab and a chic modest blouse`;
        }],
        [/wearing a [^,]+ hijab and [^,]+ dress/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'pastel';
            return `wearing a ${color} hijab and an elegant modest dress`;
        }],
        [/wearing a [^,]+ hijab and [^,]+ cardigan/gi, (match) => {
            const hijabColor = match.match(/wearing a ([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'white';
            return `wearing a ${color} hijab and a cozy cardigan`;
        }],
        [/wearing [^,]+ hijab and [^,]+ cotton/gi, (match) => {
            const hijabColor = match.match(/wearing (?:a )?([^,]+) hijab/i);
            const color = hijabColor ? hijabColor[1] : 'white';
            return `wearing a ${color} hijab and a modern cotton`;
        }],
        // Dialog labels
        [/Dialog nenek(\s*\([^)]*\))?\s*:/gi, 'Dialog wanita$1:'],
        // Dialog content — change nenek self-reference to kak/kakak
        [/"([^"]*)nenek([^"]*)"/g, (match, before, after) => {
            return `"${before.replace(/nenek/gi, 'kakak')}kakak${after.replace(/nenek/gi, 'kakak')}"`;
        }],
        // Narration text
        [/\(nenek\)/gi, ''],
        [/The nenek/gi, 'The young woman'],
        [/the nenek/gi, 'the young woman'],
        [/She smiles warmly/gi, 'She smiles radiantly'],
        [/She smiles sweetly/gi, 'She smiles charmingly'],
        [/She smiles softly/gi, 'She smiles beautifully'],
    ];

    function adaptPrompt(prompt, replacements) {
        let result = prompt;
        for (const [pattern, replacement] of replacements) {
            result = result.replace(pattern, replacement);
        }
        return result;
    }

    // ─── Inject into PROMPTS.image ───
    if (PROMPTS.image) {
        for (const material of Object.keys(PROMPTS.image)) {
            if (PROMPTS.image[material].nenek && !PROMPTS.image[material].wanita) {
                PROMPTS.image[material].wanita = adaptPrompt(
                    PROMPTS.image[material].nenek,
                    IMAGE_REPLACEMENTS
                );
            }
        }
    }

    // ─── Inject into PROMPTS.video ───
    if (PROMPTS.video) {
        for (const material of Object.keys(PROMPTS.video)) {
            if (PROMPTS.video[material].nenek && !PROMPTS.video[material].wanita) {
                PROMPTS.video[material].wanita = adaptPrompt(
                    PROMPTS.video[material].nenek,
                    VIDEO_REPLACEMENTS
                );
            }
        }
    }

    console.log('✅ Wanita Muda prompts injected successfully');
})();
