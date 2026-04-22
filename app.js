// ============================================
// 🕌 Mosque Prompt Generator — App Logic
// ============================================

// ─── Prompt Data ───
const PROMPTS = {
    image: {
        pasir: {
            kakek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly man (kakek) wearing a white peci (Muslim cap) and a brown batik shirt, sitting cross-legged on a wooden bench in front of a traditional Javanese wooden house (rumah kampung). He is smiling warmly while proudly displaying a beautifully detailed miniature mosque made entirely from fine sand. The mosque has intricate sand-carved domes, minarets, arched windows, and a small courtyard — all sculpted from compacted golden sand. The setting is a lush Indonesian village (kampung) with banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm golden hour sunlight, soft bokeh background, ultra-detailed, National Geographic quality, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman (nenek) wearing a soft green hijab (kerudung) and a floral kebaya blouse, sitting on a woven bamboo mat (tikar) in the yard of a traditional kampung house. She is gently holding a beautifully crafted miniature mosque made entirely from fine sand, with detailed sand domes, minarets, and carved archways. The village background shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Warm afternoon sunlight filtering through the trees, cinematic composition, ultra-detailed, photorealistic, 8K resolution.`
        },
        tanah: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a black peci and a white koko shirt, sitting on a low wooden stool in the courtyard of a rustic kampung house. He is carefully shaping a detailed miniature mosque made from reddish-brown clay (tanah liat). The mosque features hand-molded domes, tall minarets with crescent finials, arched doorways, and textured walls — all crafted from natural earth clay. His weathered hands show traces of clay. The background shows a traditional village with bamboo walls, a well (sumur), roaming chickens, goats, and lush tropical vegetation. Morning sunlight, warm earth tones, ultra-detailed, photorealistic, 8K.`,
            nenek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly woman wearing a cream-colored hijab and a modest brown batik dress, sitting in the shaded veranda (teras) of a wooden kampung house. She is proudly presenting a miniature mosque sculpted from dark brown clay (tanah), with smooth domes, carved minarets, and tiny arched windows. Small clay-working tools are beside her. The kampung background features a wooden fence, papaya trees, banana plants, a rooster perched on a fence post, and distant rice paddies. Soft diffused morning light, rich earthy color palette, cinematic photography, 8K resolution.`
        },
        buah: {
            kakek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly man wearing a white peci and a sage green shirt, sitting at a rustic wooden table in front of a traditional Javanese kampung house. He is beaming with pride next to an incredible miniature mosque constructed entirely from tropical fruits — watermelon domes, pineapple minarets, dragon fruit walls, mango archways, rambutan decorative accents, and a courtyard paved with sliced starfruit. The vibrant colors of the fruits create a stunning mosaic. Behind him, the village scene shows coconut trees, a bamboo bridge over a small stream, chickens, ducks, and children playing in the distance. Bright natural daylight, vivid colors, ultra-sharp detail, food art photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a pastel pink hijab and a patterned batik blouse, sitting beside a beautifully arranged miniature mosque made entirely from fresh tropical fruits — papaya domes, banana minarets, coconut shell base, orange slice windows, grape decorative elements, and guava accent details. She is smiling warmly with both hands gently framing the creation. The kampung background includes a wooden house with a corrugated tin roof, hanging orchids, a stone well, free-roaming roosters, and a lazy cat on the porch. Warm golden sunlight, vibrant colors, ultra-detailed macro photography, 8K resolution.`
        },
        sayuran: {
            kakek: `A hyper-realistic photograph of a 70-year-old Indonesian elderly man wearing a brown peci and a plaid flannel shirt, sitting on a bamboo bench in the front yard of a traditional kampung house. He is displaying an extraordinary miniature mosque built entirely from fresh vegetables — cabbage domes, carrot minarets, eggplant walls, long bean arched doorways, chili pepper crescent finials, corn kernel decorations, and a cucumber courtyard base. The textures and natural colors of the vegetables create a stunning organic architecture. Village backdrop with wooden houses, a vegetable garden, banana trees, chickens scratching in the dirt, and a goat tied to a post. Soft morning light, rich natural colors, editorial photography quality, 8K.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a white hijab and a dark green kebaya, sitting at a wooden table under a shady jackfruit tree in a kampung yard. She proudly showcases a detailed miniature mosque made entirely from vegetables — pumpkin dome, asparagus minarets, sliced tomato rosette windows, broccoli tree landscaping, bell pepper walls, and a base of layered lettuce leaves. Surrounding her are baskets of fresh vegetables from the garden. The village setting includes thatched-roof houses, a bamboo fence, drying rice grains on a mat, hens with chicks, and smoke rising from a traditional clay stove (tungku). Warm afternoon glow, vivid colors, ultra-detailed, 8K resolution.`
        },
        kayu: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a black peci and a white collarless shirt, sitting in his woodworking workshop (bengkel kayu) beside a traditional kampung house. He is proudly holding a masterfully carved miniature mosque made entirely from polished teak wood — with intricately carved domes, detailed lattice windows (jali), smooth minarets, Javanese-style carved doors, and a beautifully grained wood base. Wood shavings and carving tools are scattered around. The kampung backdrop shows a wooden house with carved eaves, hanging bird cages, a rooster on the porch railing, coconut trees, and a dirt path. Warm golden hour light highlighting the wood grain, cinematic depth of field, master craftsmanship, 8K.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a dark brown hijab and a burgundy batik blouse, sitting on the veranda of a Javanese wooden house. She is gently cradling a finely crafted miniature mosque made from various types of wood — mahogany domes, sandalwood minarets, teak walls with carved geometric patterns, and a cedar base with miniature wooden trees. The craftsmanship shows natural wood color variations creating beautiful contrast. The kampung scene behind her features a well-maintained yard, jasmine bushes, a wooden well with a bucket, chickens, and distant hills with rice terraces. Soft diffused light, warm wood tones, artisan photography, 8K resolution.`
        },
        bambu: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a white peci and a light blue batik shirt, sitting cross-legged on a bamboo platform (bale-bale) in front of a bamboo-walled kampung house. He is smiling proudly next to an incredible miniature mosque constructed entirely from bamboo — split bamboo domes, thin bamboo stick minarets, woven bamboo (anyaman) walls, bamboo lattice windows, and a bamboo strip courtyard floor. The natural golden-green color of bamboo gives the mosque a warm organic feel. The village setting shows bamboo groves, thatched roofs, a flowing stream, ducks, chickens, and a wooden ox cart. Morning light through bamboo canopy, natural tones, ultra-detailed, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a light yellow hijab and a traditional Javanese batik sarong with a matching top, sitting on a woven bamboo mat under a large banyan tree in a kampung setting. She is presenting a delicate miniature mosque crafted entirely from bamboo — featuring woven bamboo (anyaman bambu) domes, slender bamboo minarets, split bamboo walls with traditional patterns, and a base of bamboo strips arranged in geometric designs. The warmth of bamboo tones contrasts beautifully with the green surroundings. Behind her, the kampung shows bamboo houses, a vegetable garden, a cow grazing, hens and chicks, and smoke from a cooking fire. Soft golden afternoon light, serene atmosphere, photorealistic, 8K.`
        },
        batu: {
            kakek: `A hyper-realistic photograph of a 69-year-old Indonesian elderly man wearing a black peci and a cream-colored koko shirt, sitting on a large flat rock beside a clear mountain stream in a kampung setting. He is proudly displaying a breathtaking miniature mosque built entirely from natural river stones — smooth gray pebble domes, stacked slate minarets, cobblestone walls with precise mortar-like joints, quartz crystal window accents, and a pebble-mosaic courtyard. The varied colors of the stones — gray, brown, white, and amber — create stunning natural patterns. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Morning mist, river sounds, ultra-detailed, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a soft gray hijab and a dark blue batik blouse, sitting in the courtyard of a traditional kampung house. She is gently presenting a beautifully crafted miniature mosque made entirely from river stones — smooth rounded pebble domes, thin slate minarets, carefully stacked stone walls, and a courtyard base of flat pebbles arranged in concentric patterns. Small crystal quartz pieces serve as window decorations. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Warm afternoon light, earthy tones, photorealistic, 8K resolution.`
        },
        es: {
            kakek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly man wearing a white peci and a thick dark green jacket, sitting at a frost-covered wooden table in a cold highland setting. He is proudly showcasing a stunning miniature mosque carved entirely from crystal-clear ice — transparent ice domes refracting rainbow light, frozen minarets with prismatic edges, ice-carved arched windows, delicate ice lattice walls, and a frozen courtyard with miniature ice trees. The mosque glows with an ethereal blue-white translucence. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Cold misty atmosphere, dramatic lighting, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a white hijab and a warm maroon cardigan, sitting beside a beautifully sculpted miniature mosque made entirely from ice — glistening frozen domes, crystalline minarets catching light, translucent ice walls with carved geometric patterns, and a frosted courtyard base. Tiny ice crescents top each minaret. The ice mosque sparkles with blue and white reflections. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Frosty cold-weather atmosphere, ethereal lighting, photorealistic, 8K resolution.`
        },
        cokelat: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a brown peci and a white koko shirt, sitting at a rustic wooden table in a traditional kampung setting. He is beaming with delight next to an exquisite miniature mosque crafted entirely from chocolate — rich dark chocolate domes with glossy finish, milk chocolate minarets, white chocolate lattice windows, cocoa-dusted walls with molded arabesque patterns, and a chocolate courtyard with tiny chocolate trees. The aroma of chocolate fills the air. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm studio-like lighting, food photography quality, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a chocolate-brown hijab and a cream kebaya, sitting at a wooden table presenting a magnificent miniature mosque made entirely from chocolate — smooth dark chocolate domes, swirled milk chocolate minarets, white chocolate decorative arches, cocoa-painted walls, and a base of chocolate tiles arranged in Islamic geometric patterns. The chocolate has a beautiful glossy sheen. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Rich warm tones, confectionery art photography, 8K resolution.`
        },
        kaca: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a white peci and a navy blue batik shirt, sitting in a sunlit workshop beside a dazzling miniature mosque made entirely from stained glass — colorful glass dome panels in emerald green, sapphire blue, ruby red, and amber gold, creating kaleidoscopic light patterns. Delicate glass minarets, leaded glass windows with Islamic geometric patterns, and a mirrored glass courtyard floor reflecting rainbow hues. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Brilliant sunlight streaming through the glass, prismatic reflections, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a pastel blue hijab and a white batik blouse, sitting beside a spectacular miniature mosque crafted from colored glass pieces — mosaic glass domes in turquoise and gold, slender glass minarets, stained glass windows depicting floral patterns, and a crystal glass base that reflects light beautifully. Tiny glass beads adorn the archways. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Sunlight filtering through glass creating colorful reflections, 8K resolution.`
        },
        kertas: {
            kakek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly man wearing a black peci and a light gray koko shirt, sitting at a wooden desk covered with colorful paper sheets. He is proudly presenting a magnificent miniature mosque made entirely from folded and cut paper — origami-style paper domes in white and gold, quilled paper minarets with spiral details, paper-cut lattice windows, layered cardstock walls with intricate Islamic geometric cutout patterns, and a paper garden courtyard with tiny paper trees. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Soft natural light, paper art photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a mint green hijab and a floral batik blouse, surrounded by colorful paper and craft tools. She is displaying a delicate miniature mosque made entirely from paper — kirigami-style folded paper domes, rolled paper quilling minarets, paper-cut jali screen windows, layered paper walls with embossed patterns, and a base of woven paper strips. The paper mosque features beautiful pastel colors — cream, gold, soft green, and white. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Warm diffused light, craft photography, 8K resolution.`
        },
        lilin: {
            kakek: `A hyper-realistic photograph of a 69-year-old Indonesian elderly man wearing a white peci and a dark brown batik shirt, sitting beside a warmly glowing miniature mosque sculpted entirely from beeswax and candle wax — smooth honey-colored wax domes, hand-carved wax minarets, translucent wax walls that glow from within when candlelight passes through, wax-molded arched doorways, and a wax courtyard with tiny wax lanterns. Small candle flames flicker around the base. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm candlelight atmosphere, golden glow, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a cream hijab and a brown batik dress, sitting at a candlelit table presenting a beautiful miniature mosque made from colored wax — ivory white wax domes, golden wax minarets, layered pastel wax walls, and carved wax windows that let soft light pass through. Wax flower decorations adorn the entrance. Small tea candles surround the base creating a magical warm glow. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Romantic candlelit atmosphere, warm golden tones, 8K resolution.`
        },
        gula: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a brown peci and a white koko shirt, sitting at a wooden table in a kampung setting. He is proudly presenting a breathtaking miniature mosque constructed entirely from sugar — spun sugar domes with crystalline sparkle, caramelized sugar minarets in amber tones, rock candy windows, pressed sugar walls with geometric patterns, and a granulated sugar courtyard that glitters like diamonds. The sugar mosque catches the light beautifully. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Sparkling natural light, confectionery photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a pink hijab and a white kebaya, displaying a magnificent miniature mosque made entirely from sugar — pulled sugar domes in iridescent white, spun sugar minarets, crystal rock candy windows, molded sugar walls with floral patterns, and a base of caramelized sugar tiles. The sugar catches light creating a dazzling sparkle effect. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Bright sparkling light, sugar art photography, 8K resolution.`
        },
        kerang: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a white peci and a blue-striped shirt, sitting on a weathered wooden bench by the seaside. He is proudly showcasing a stunning miniature mosque made entirely from seashells — large conch shell domes, spiral shell minarets, cowrie shell walls arranged in patterns, mother-of-pearl window inlays, coral piece archways, and a sandy courtyard decorated with tiny starfish and sea glass. The iridescent shimmer of the shells creates beautiful reflections. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Ocean breeze, coastal light, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a sea-blue hijab and a white cotton blouse, sitting near the shore presenting a delicate miniature mosque crafted from seashells — pearlescent abalone shell domes, turret shell minarets, scallop shell walls, tiny pearl decorations, and a base of crushed coral and sea glass arranged in mosaic patterns. Mother-of-pearl accents gleam in the sunlight. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Coastal golden light, ocean backdrop, 8K resolution.`
        },
        biji: {
            kakek: `A hyper-realistic photograph of a 70-year-old Indonesian elderly man wearing a cream peci and a brown plaid shirt, sitting at a wooden table surrounded by jars of seeds and grains. He is displaying an intricate miniature mosque built entirely from seeds and grains — sesame seed-covered domes, rice grain minarets, black seed (habbatussauda) walls in geometric patterns, corn kernel archways, red bean courtyard tiles, and green mung bean landscaping. The natural earth tones create a warm, organic mosaic. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm natural light, macro detail photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a beige hijab and a green batik blouse, surrounded by bowls of colorful seeds and grains. She is presenting a beautiful miniature mosque made from seeds — golden flax seed domes, sunflower seed minarets, chia seed-textured walls, lentil mosaic windows, pumpkin seed archways, and a base of mixed quinoa and millet in concentric patterns. The variety of seed colors creates a stunning natural artwork. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Soft warm light, botanical art photography, 8K resolution.`
        },
        kain: {
            kakek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly man wearing a black peci and a batik shirt, sitting cross-legged on a veranda surrounded by rolls of colorful traditional Indonesian fabrics. He is proudly presenting a miniature mosque constructed from fabric — silk batik-covered domes, velvet-wrapped minarets, embroidered walls with Islamic calligraphy, lace-trimmed windows, songket-fabric accent panels with gold thread, and a base draped in ikat-patterned cloth. The textures and patterns of the fabrics are stunning. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Rich textile colors, soft natural light, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a burgundy hijab and a gold-trimmed kebaya, surrounded by beautiful Indonesian textiles. She is displaying a magnificent miniature mosque made from fabric — batik tulis-covered domes, brocade-wrapped minarets, hand-embroidered walls with floral motifs, tenun ikat panels, and a base draped in woven songket with metallic gold thread. Each fabric piece is carefully selected for color harmony. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Rich warm textile tones, fashion photography quality, 8K resolution.`
        },
        logam: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a white peci and a dark gray shirt, sitting in a metalworking workshop with tools hanging on the wall. He is proudly presenting a magnificent miniature mosque forged from metals — polished brass domes gleaming gold, copper minarets with verdigris patina accents, wrought iron lattice windows, hammered aluminum walls with embossed Islamic patterns, and a brushed steel base. The metal surfaces reflect warm light beautifully. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm workshop lighting, metallic reflections, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a silver-gray hijab and a dark blue batik dress, presenting a stunning miniature mosque crafted from various metals — gleaming copper domes, silver filigree minarets, brass-engraved walls with arabesque patterns, bronze archways, and a pewter base with etched geometric designs. The mixed metals create a beautiful warm-cool contrast. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Reflective metallic surfaces, warm light, 8K resolution.`
        },
        kristal: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a white peci and a light purple batik shirt, sitting at a velvet-draped table presenting an awe-inspiring miniature mosque made entirely from crystals and gemstones — amethyst crystal cluster domes, clear quartz point minarets, rose quartz walls, citrine window inlays, jade archway accents, and a base of polished agate slices arranged in a fractal pattern. The crystals refract light creating rainbow prisms. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Dramatic crystal-refracted light, gemstone photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a lavender hijab and a white silk blouse, presenting a breathtaking miniature mosque crafted from crystals — selenite tower minarets glowing with inner light, amethyst geode domes, clear quartz walls, fluorite window accents, and a base of polished obsidian reflecting the mosque like a mirror. Tiny crystal points surround the courtyard like a miniature garden. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Mystical crystal light, ethereal photography, 8K resolution.`
        },
        sabun: {
            kakek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly man wearing a brown peci and a cream koko shirt, sitting at a clean wooden table in a kampung veranda. He is proudly displaying a charming miniature mosque carved and molded from colorful soap bars — smooth pastel-colored soap domes in lavender and mint green, carved soap minarets, soap walls with stamped floral patterns, and a base of layered soap slices in gradient colors. The soap mosque has a clean, smooth, satisfying aesthetic. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Clean bright lighting, product photography quality, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a soft pink hijab and a white cotton blouse, presenting a beautiful miniature mosque sculpted from artisan soap — swirled pastel soap domes, carved white soap minarets, layered soap walls showing rainbow cross-sections, embedded dried flower soap windows, and a base of honey-glycerin soap tiles. Each soap piece has beautiful marbled colors. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Soft pastel tones, artisan craft photography, 8K resolution.`
        },
        daur_ulang: {
            kakek: `A hyper-realistic photograph of a 70-year-old Indonesian elderly man wearing a green peci and a earth-toned batik shirt, sitting in his kampung yard surrounded by sorted recyclable materials. He is proudly showcasing a creative miniature mosque built entirely from recycled materials — plastic bottle domes cut and shaped beautifully, aluminum can minarets, bottle cap mosaic walls, cardboard structural elements covered in recycled paper, and a base of flattened tin cans arranged artfully. Despite the humble materials, the craftsmanship is extraordinary. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm natural light, environmental art photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a green hijab and a batik blouse, sitting beside a remarkably creative miniature mosque made from recycled materials — colorful plastic bottle caps arranged as dome mosaics, newspaper-rolled minarets, CD/DVD reflective window panels, egg carton textured walls, and a base of woven plastic bag strips. The upcycled mosque is colorful and surprisingly beautiful. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Bright cheerful light, creative upcycle photography, 8K resolution.`
        },
        kulit: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a dark brown peci and a tan leather vest over a white shirt, sitting in a leather workshop with tools and hides. He is presenting a masterfully crafted miniature mosque made from leather — tooled leather domes with embossed arabesque patterns, stitched leather minarets, leather-bound walls with burned pyrography designs, rawhide lattice windows, and a suede base with leather-stamped geometric patterns. The rich brown leather tones are warm and luxurious. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm workshop light, leather craft photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a caramel-colored hijab and a dark brown batik blouse, presenting a beautifully crafted miniature mosque made from leather — soft cow leather domes with hand-tooled floral patterns, saddle-stitched leather minarets, embossed leather walls, and a leather base with pyrography Islamic geometric designs. The leather has been dyed in beautiful shades of tan, brown, and burgundy. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Rich leather tones, artisan photography, 8K resolution.`
        },
        beton: {
            kakek: `A hyper-realistic photograph of a 69-year-old Indonesian elderly man wearing a white peci and a gray work shirt, sitting at a sturdy workbench in an outdoor kampung workshop. He is proudly presenting a robust miniature mosque cast from concrete — smooth gray concrete domes with exposed aggregate texture, reinforced concrete minarets, brutalist-style concrete walls with geometric formwork patterns, glass-embedded concrete windows, and a polished concrete base. The industrial aesthetic has a surprising elegance. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Overcast soft light, architectural photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a light gray hijab and a white blouse, presenting a strikingly modern miniature mosque made from concrete — smooth poured concrete domes, minimalist concrete minarets, textured concrete walls with board-formed patterns, and a polished terrazzo base with embedded colorful stone chips. Small succulent plants are placed around the concrete courtyard. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Clean modern light, architectural photography, 8K resolution.`
        },
        keramik: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a blue peci and a white koko shirt, sitting in a ceramic workshop surrounded by glazes and pottery tools. He is proudly presenting a magnificent miniature mosque made from fired ceramic — glossy cobalt blue ceramic domes, ivory white ceramic minarets with hand-painted floral motifs, celadon green glazed walls, gold-lustre accent tiles, and a base of interlocking ceramic tiles in Islamic geometric patterns. The glazed surfaces reflect light beautifully. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Bright studio-quality light, ceramic art photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a cobalt blue hijab and a white batik blouse, presenting a stunning miniature mosque crafted from ceramic — delft blue-and-white ceramic domes, hand-painted ceramic minarets with floral vines, glazed terracotta walls, turquoise ceramic tile accents, and a base of mosaic ceramic pieces in traditional Indonesian patterns. Each ceramic piece is hand-painted with meticulous detail. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Bright clear light, ceramic art photography, 8K resolution.`
        },
        semen: {
            kakek: `A hyper-realistic photograph of a 70-year-old Indonesian elderly man wearing a gray peci and a brown work shirt, sitting in his kampung yard with bags of cement and a mixing tray nearby. He is proudly displaying a miniature mosque sculpted from cement — hand-plastered cement domes with smooth finish, tapered cement minarets, cement-cast walls with hand-carved patterns while still wet, and a cement base with embedded pebble mosaic. The gray cement has been expertly smoothed and detailed. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Natural overcast light, construction art photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a cream hijab and a gray-blue batik dress, presenting a well-crafted miniature mosque made from cement — carefully plastered cement domes painted white, sculpted cement minarets, cement walls with pressed leaf pattern impressions, and a cement base with mosaic tile inlay. She has added touches of green paint on the dome crescents and gold paint on the window frames. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Soft natural light, craft photography, 8K resolution.`
        },
        rotan: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a white peci and an olive green batik shirt, sitting on a rattan chair in front of a rattan workshop. He is proudly presenting a beautifully woven miniature mosque made entirely from rattan — intricately woven rattan domes with herringbone patterns, slender rattan-wrapped minarets, rattan wickerwork walls, rattan lattice windows, and a coiled rattan base. The warm honey-brown color of the rattan gives the mosque an elegant natural look. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm afternoon light, rattan craft photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a honey-brown hijab and a cream batik blouse, sitting surrounded by rattan coils and weaving tools. She is presenting a delicate miniature mosque woven from rattan — elegant rattan-wrapped domes, spiraling rattan minarets, open-weave rattan walls allowing light to pass through, and a tightly coiled rattan base with concentric ring patterns. The natural golden-brown rattan has a beautiful warm sheen. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Golden warm light, artisan weaving photography, 8K resolution.`
        },
        janur: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a white peci and a light green batik shirt, sitting in the yard of a kampung house with stacks of fresh green and yellow coconut leaves (janur). He is proudly displaying a magnificent miniature mosque crafted from woven coconut leaves (janur) — intricately folded janur domes with traditional Javanese weaving patterns, janur-wrapped minarets decorated with tiny janur roses, woven janur lattice walls, and a base of braided coconut leaf strips in geometric patterns. The fresh green and golden yellow colors of the janur are vibrant and beautiful. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Bright morning light, traditional craft photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a pale green hijab and a white batik kebaya, sitting on a bamboo bench surrounded by fresh coconut leaves (janur). She is presenting a beautifully woven miniature mosque from janur — layered janur folded domes, spiraling janur ribbon minarets, woven janur screen walls with diamond patterns, janur flower decorations at each corner, and a base of braided golden coconut leaves. The mosque shows the beautiful transition from green to golden yellow janur colors. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Fresh morning light, traditional Indonesian craft photography, 8K resolution.`
        },
        emas: {
            kakek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly man wearing a pristine white peci and a luxurious deep burgundy batik shirt with gold thread embroidery, sitting at a velvet-draped table in a sunlit kampung veranda. He is proudly presenting an absolutely breathtaking miniature mosque forged entirely from gleaming 24-karat gold — brilliant mirror-polished gold domes reflecting intense golden sunlight, ornate gold filigree minarets with intricate swirling arabesque patterns, hammered gold walls with deeply embossed Islamic calligraphy, gold leaf-covered arched doorways with ruby-red gemstone inlays, and a solid gold base with engraved geometric rosette patterns radiating outward. The gold surfaces create dazzling warm reflections that illuminate the entire scene with a rich amber glow. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Intense golden hour sunlight creating dramatic reflections, luxury jewelry photography, ultra-sharp macro detail, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a rich deep gold hijab with delicate pearl-white lace trim and an elegant ivory kebaya with gold brocade patterns, sitting on a silk-cushioned wooden chair in a kampung courtyard bathed in warm light. She is gently cradling a magnificent miniature mosque made entirely from radiant gold — lustrous polished gold domes with etched floral vine patterns catching every ray of light, slender gold minarets topped with tiny diamond-encrusted crescents, hand-engraved gold walls featuring intricate Islamic geometric tessellations, and a base of interlocking gold tiles arranged in a mesmerizing star pattern. Tiny gold lanterns hang from the entrance archway. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Warm golden radiance, opulent luxury photography, ultra-detailed, 8K resolution.`
        },
        perak: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a black peci and a crisp midnight-blue batik shirt, sitting in a silversmith workshop with gleaming tools hanging on the wall. He is proudly showcasing a stunning miniature mosque crafted entirely from polished sterling silver — mirror-bright silver domes reflecting cool blue-white light, intricately twisted silver wire filigree minarets with spiral details so fine they look like frozen lace, hammered silver walls with deeply embossed crescent moon and star patterns, delicate silver mesh lattice windows, and a brushed silver base with etched concentric mandala patterns. The silver surfaces shimmer with cool blue and white reflections creating an ethereal moonlit glow. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Cool silvery-blue studio lighting with dramatic reflections, master silversmith photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a shimmering silver-white hijab and a deep navy velvet kebaya with silver embroidery, sitting at a polished wooden table displaying silverwork tools. She is presenting a breathtaking miniature mosque made entirely from silver — gleaming silver domes with hand-chased floral motifs, elegant silver filigree minarets with tiny silver bells, engraved silver walls featuring flowing arabesque scrollwork, silver wire mesh windows that catch and scatter light like stars, and a polished silver base reflecting the mosque like a mirror. Each silver surface has a luminous cool-blue sheen. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Moonlight-cool silver reflections, elegant jewelry photography, 8K resolution.`
        },
        mutiara: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a white peci and an elegant cream-white koko shirt with mother-of-pearl buttons, sitting at a dark mahogany table covered in soft black velvet. He is proudly displaying an absolutely exquisite miniature mosque constructed entirely from lustrous pearls — perfectly spherical iridescent white pearl domes glowing with pink and blue overtones, graduated pearl minarets from large South Sea pearls to tiny seed pearls, walls of tightly arranged freshwater pearls in creamy white and soft pink hues creating subtle ombré patterns, mother-of-pearl window panels reflecting rainbow iridescence, and a base of polished abalone shell tiles radiating vivid greens, blues, and purples. The entire mosque shimmers with a dreamy pearlescent luminescence. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Soft diffused pearlescent light, luxury still-life photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a luminous pearl-white hijab with iridescent sheen and an elegant dusty-rose kebaya adorned with pearl beading, sitting beside a display of lustrous pearls on dark silk. She is presenting a stunning miniature mosque made from pearls — creamy Akoya pearl domes with soft pink lustre, Tahitian black pearl minarets with peacock-green overtones, golden South Sea pearl accent archways, walls of baroque pearls in organic flowing patterns, keshi pearl window decorations scattering rainbow light, and a base of polished mother-of-pearl in swirling iridescent patterns of turquoise, magenta, and gold. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Ethereal iridescent lighting, high-end jewelry photography, 8K resolution.`
        },
        bunga: {
            kakek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly man wearing a white peci and a vivid emerald-green batik shirt, sitting in a lush kampung garden overflowing with tropical flowers. He is beaming with pride beside an absolutely spectacular miniature mosque constructed entirely from fresh vibrant flowers — blazing crimson red rose petal domes layered like silk, bright golden sunflower minarets standing tall, walls of electric purple orchid blossoms and hot pink bougainvillea arranged in striking geometric patterns, archways of pure white jasmine (melati) releasing sweet fragrance, vivid orange marigold courtyard borders, and a base of deep green tropical leaves with scattered frangipani in cream and yellow. Butterflies dance around the floral mosque. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Brilliant saturated natural daylight, vivid floral photography, macro detail, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a vibrant magenta hijab and a floral-printed kebaya in vivid coral and turquoise, sitting in a flower-filled kampung garden surrounded by baskets of fresh blooms. She is gently presenting a magnificent miniature mosque made entirely from flowers — deep violet hydrangea domes with intense blue undertones, tall bright yellow chrysanthemum minarets, walls of vivid scarlet hibiscus and electric-blue delphiniums creating bold color-blocked patterns, delicate white lily window accents, archways woven from vivid pink carnations and orange bird-of-paradise flowers, and a base of lush emerald banana leaves dotted with golden champaka blossoms. Hummingbirds hover nearby. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Vivid saturated colors, botanical garden photography, 8K resolution.`
        },
        permen: {
            kakek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly man wearing a brown peci and a cheerful bright yellow koko shirt, sitting at a colorful table overflowing with sweets and candies. He is grinning with delight beside a fantastical miniature mosque built entirely from candies — glossy swirled lollipop domes in electric pink, neon blue, and vivid purple, tall striped candy cane minarets in classic red-and-white, walls of rainbow gummy bears and jewel-bright hard candies in emerald green, ruby red, sapphire blue, and amber gold arranged in dazzling mosaic patterns, jelly bean courtyard tiles in every color imaginable, and a base of shiny wrapped toffees and glittering rock candy crystals. The candy mosque is an explosion of saturated neon colors. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Bright pop-art studio lighting, candy advertisement photography, vivid colors, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a candy-pink hijab and a bright white blouse with colorful embroidery, surrounded by jars of vibrant candies and sweets. She is cheerfully presenting a whimsical miniature mosque made entirely from candy — shiny pastel-swirled marshmallow domes in baby pink and sky blue, tall twisted licorice minarets in glossy black and red, walls of neatly arranged M&M-style chocolates creating vivid pixel-art Islamic patterns in electric orange, lime green, and royal purple, stained-glass-style windows made from translucent fruit-flavored hard candy in ruby, emerald, and topaz, and a base of colorful sprinkles and sugar pearls. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Playful vibrant lighting, confectionery photography, 8K resolution.`
        },
        koral: {
            kakek: `A hyper-realistic photograph of a 69-year-old Indonesian elderly man wearing a white peci and a deep ocean-blue batik shirt with coral motifs, sitting near a traditional coastal kampung with turquoise waters behind him. He is proudly presenting a breathtaking miniature mosque built entirely from coral — vivid branching staghorn coral domes in electric neon orange and hot pink, tall pillar coral minarets in deep crimson and bright magenta, walls of brain coral in fluorescent yellow-green and lavender, fan coral window screens in brilliant scarlet and tangerine, blue ridge coral accent arches, and a base of crushed white coral sand with scattered pieces of vivid turquoise, cobalt blue, and lime green sea glass. The coral colors are intensely saturated and almost neon in their vibrancy. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Bright tropical underwater-style lighting, marine photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a vivid turquoise hijab and a white cotton blouse with coral-pink embroidery, sitting by a coastal kampung with clear ocean behind her. She is presenting a stunning miniature mosque crafted from coral — soft coral domes in brilliant electric pink and deep magenta with delicate polyp textures, elegant sea fan minarets in vivid blood-orange and golden-yellow, walls of mushroom coral in fluorescent green and lavender arranged in organic flowing patterns, table coral archways in intense cobalt blue, and a base of polished coral rubble in cream, rose, and aqua arranged in concentric ocean-wave patterns. Tiny colorful tropical fish swim in a glass bowl beside the mosque. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Vivid tropical coastal light, underwater reef photography style, 8K resolution.`
        },
        lumut: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a black peci and a deep forest-green batik shirt, sitting on a moss-covered stone in a misty highland kampung surrounded by ancient trees dripping with moss and ferns. He is presenting a magical miniature mosque grown entirely from living moss and ferns — thick emerald-green cushion moss domes with tiny dewdrops glistening like diamonds, delicate maidenhair fern minarets in vivid bright green, walls of sheet moss in varying shades from lime green to deep forest green creating a natural ombré effect, tiny bird's nest fern window accents in glossy dark green, miniature selaginella ground cover in electric chartreuse forming the courtyard, and a base of rich dark humus soil with scattered tiny white mushrooms and bright orange bracket fungi. Morning mist swirls around the moss mosque. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Ethereal misty forest light, macro nature photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a sage-green hijab and a dark brown batik dress with leaf motifs, sitting in a mossy forest clearing in a highland kampung. She is presenting an enchanting miniature mosque made from living moss and ferns — velvety sphagnum moss domes in vivid chartreuse and deep emerald, sword fern minarets in bright spring-green, walls of different moss species creating a tapestry of greens from neon lime to deep jade, tiny asplenium fern window decorations in glossy black-green, and a base of rich forest-floor moss carpet dotted with miniature bright red toadstools and vivid violet wildflowers. Dewdrops sparkle across every surface like scattered jewels. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Mystical diffused forest light, enchanted garden photography, 8K resolution.`
        },
        stik_eskrim: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a white peci and a bright sky-blue batik shirt, sitting at a clean wooden table covered with bundles of popsicle sticks and craft supplies. He is proudly displaying a meticulously constructed miniature mosque built entirely from popsicle sticks — precisely arranged and layered popsicle stick domes stained in vivid cherry-red and bright royal blue, tall geometric popsicle stick minarets painted in bold sunflower-yellow and deep emerald-green stripes, interlocking popsicle stick walls with laser-precision geometric cutout patterns painted in alternating hot pink and turquoise, tiny popsicle stick lattice windows stained amber-gold, and a sturdy base of cross-layered sticks painted in a vivid rainbow gradient from violet to red. Each stick is perfectly aligned showing extraordinary craftsmanship. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Bright cheerful daylight, craft hobby photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a bright coral-pink hijab and a cream blouse, sitting at a craft table with colorful popsicle sticks sorted by color. She is presenting a charming miniature mosque made from popsicle sticks — carefully layered stick domes painted in pastel lavender and mint green with hand-painted floral details, slender minarets built from stacked sticks painted in vivid tangerine-orange and candy-apple red, walls of woven popsicle sticks painted in a checkerboard of bright lemon-yellow and electric violet, tiny stick windows with miniature curtain cutouts, and a base of sticks arranged in a sunburst pattern painted in graduating shades of ocean-blue to sky-blue. Tiny painted stick trees and flowers decorate the courtyard. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Warm craft-room lighting, DIY hobby photography, 8K resolution.`
        },
        tali: {
            kakek: `A hyper-realistic photograph of a 70-year-old Indonesian elderly man wearing a cream peci and a rugged dark brown work shirt, sitting on a wooden bench surrounded by coils of various ropes and twines in natural and dyed colors. He is proudly presenting a remarkable miniature mosque constructed entirely from rope and twine — thick manila rope domes coiled in perfect spirals with natural golden-tan color, tall sisal rope minarets tightly wound with precision, walls of braided jute twine in natural brown interwoven with vivid crimson-dyed cotton cord creating bold geometric diamond patterns, macramé-knotted window panels in bright saffron-yellow and deep indigo-blue, and a base of tightly woven flat rope in concentric circles alternating between bright orange and deep forest-green. The rope textures are rich and tactile. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm natural light emphasizing rope textures, artisan craft photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a warm ochre-yellow hijab and a dark blue batik blouse, sitting in a kampung veranda surrounded by bundles of colorful rope and macramé projects. She is presenting a beautiful miniature mosque made from rope and twine — elegantly coiled cotton rope domes in vivid coral-pink and cream spiral patterns, twisted jute minarets wrapped with bright turquoise thread accents, walls of macramé-knotted panels in natural hemp with woven-in threads of electric magenta and lime green forming intricate floral knot patterns, tiny rope-framed windows with miniature tassel decorations in royal purple and gold, and a base of flat-braided rope in alternating bands of sunshine-yellow and cobalt-blue. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Warm afternoon light, textile art photography, 8K resolution.`
        },
        pelepah: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a white peci and an olive-green work shirt, sitting in a kampung yard with stacks of dried banana bark (pelepah pisang) in rich brown and golden tones. He is proudly showcasing a striking miniature mosque crafted from banana trunk fiber and bark — layered dried pelepah pisang domes with natural striations in warm amber, caramel, and deep chocolate-brown creating beautiful organic gradient patterns, tall fibrous minarets wrapped tightly in dried banana leaf fiber with golden-hay colored accents, walls of pressed banana bark showing vivid natural grain patterns in burnt sienna and raw umber, decorative archways of curled dried banana leaf in rich bronze and copper tones, and a base of woven banana fiber strips in alternating dark mahogany and pale straw-gold creating a checkerboard pattern. The natural textures are extraordinarily detailed. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm golden afternoon light, natural fiber art photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a warm chocolate-brown hijab and a cream kebaya with batik trim, sitting beside piles of prepared banana trunk material in a kampung yard. She is presenting a beautiful miniature mosque made from banana trunk fiber — delicately layered pelepah pisang domes showing natural color variations from pale cream to deep russet-brown like a sunset gradient, graceful minarets of rolled banana bark in warm honey-gold and cinnamon tones, walls of pressed banana fiber with visible natural veining in amber and tawny-brown creating organic abstract patterns, window frames of curled dried banana leaf in rich bronze, and a base of tightly woven banana fiber strips in a herringbone pattern mixing warm caramel with ivory-white. She has added tiny dried flowers in vivid orange and deep purple as courtyard decorations. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Soft warm diffused light, eco-art photography, 8K resolution.`
        },
        tempurung: {
            kakek: `A hyper-realistic photograph of a 69-year-old Indonesian elderly man wearing a white peci and a deep brown batik shirt, sitting in a kampung yard with piles of halved coconut shells (tempurung kelapa) in rich dark chocolate-brown and caramel tones. He is proudly presenting a robust miniature mosque crafted entirely from coconut shells — polished half-shell domes in deep espresso-brown with visible natural grain creating swirling patterns, tall minarets of stacked and carved coconut shell rings in graduated dark-to-light brown, walls of precisely cut coconut shell pieces arranged in herringbone patterns showing contrasts of dark mahogany outer shell and creamy white inner flesh, archways framed with coconut shell carved in intricate floral motifs, and a base of mosaic-arranged coconut shell pieces in alternating burnt umber and pale ivory creating a bold geometric star pattern. The natural shell has a warm polished sheen. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Rich warm tropical light, artisan craft photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a warm caramel hijab and a cream batik kebaya, sitting in a kampung veranda with sorted coconut shell pieces. She is presenting a beautiful miniature mosque made from coconut shells — smooth polished half-shell domes in deep warm brown with golden highlights, elegant minarets carved from single coconut shells in rich chocolate and amber tones, walls of thin coconut shell strips arranged in a basket-weave pattern alternating dark and light brown, delicate coconut shell lattice windows with carved geometric cutouts, and a base of polished flat coconut shell pieces arranged in concentric circles of dark espresso and pale cream. Tiny carved coconut shell flowers decorate the entrance. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Warm golden afternoon light, tropical craft photography, 8K resolution.`
        },
        rempah: {
            kakek: `A hyper-realistic photograph of a 70-year-old Indonesian elderly man wearing a brown peci and a deep saffron-yellow koko shirt, sitting at a rustic wooden table overflowing with colorful spices in earthenware bowls. He is proudly displaying an incredibly aromatic miniature mosque built entirely from spices — vivid bright-yellow turmeric powder domes with striking golden intensity, tall deep-red cinnamon stick minarets bound with star anise clusters, walls of whole cloves in dark chocolate-brown arranged in dense geometric patterns interspersed with vivid green cardamom pods and bright coral-pink dried rose petals, archways of golden-brown nutmeg and brilliant orange dried mace, windows framed with pale cream-white peppercorns and jet-black pepper berries, and a base of deep crimson-red dried chili flakes mixed with bright golden cumin seeds creating a fiery sunset-colored mosaic. The rich warm colors of the spices are intensely saturated. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm spice-market lighting, vivid food photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a vivid saffron-orange hijab and a dark brown batik blouse with gold accents, surrounded by woven baskets of aromatic spices. She is presenting a magnificent miniature mosque crafted from spices — brilliant turmeric-golden domes with hand-pressed patterns, elegant vanilla bean minarets in deep chocolate-brown bound with threads of bright red saffron strands, walls of crushed coriander seeds in warm olive-green mixed with vivid cayenne-red chili powder creating bold striped patterns, windows of translucent sliced dried galangal in pale ivory, archways of whole star anise in deep mahogany-brown, and a base of mixed ground spices creating an ombré effect from deep paprika-red through warm cinnamon-brown to bright golden turmeric. The air seems thick with fragrance. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Rich warm atmospheric light, spice art photography, 8K resolution.`
        },
        garam: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a white peci and a light blue work shirt, sitting at a wooden table near a traditional salt farm with geometric salt ponds reflecting the sky. He is proudly presenting a dazzling miniature mosque built entirely from salt crystals — large sparkling rock salt crystal domes in translucent white with rainbow prismatic refractions, tall Himalayan pink salt minarets in vivid rose-pink and deep salmon with visible crystal facets catching light, walls of coarse sea salt in pure brilliant white arranged in precise geometric patterns, black Hawaiian salt accent borders creating bold contrast, windows of transparent salt crystal plates refracting rainbow light like prisms, and a base of fine iodized salt in pristine snow-white dusted with fleur de sel crystals that sparkle like crushed diamonds. The salt mosque glitters intensely under direct light. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Brilliant harsh tropical sunlight creating maximum sparkle and crystal refraction, mineral photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a pure white hijab and a pale sky-blue batik dress, sitting near a coastal salt-harvesting field. She is presenting a sparkling miniature mosque made from salt — crystalline rock salt domes in transparent white with vivid rainbow refractions inside each crystal, pink Himalayan salt minarets in striking coral-rose with visible geological layers, walls of black lava salt in jet-black creating dramatic contrast against white sea salt geometric inlays, grey Celtic sea salt accent arches, and a base of mixed salt varieties creating a stunning mosaic of pure white, vivid pink, deep black, and warm grey arranged in Islamic geometric patterns. Each crystal surface catches and scatters light creating a dazzling display. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Intense bright light maximizing crystal sparkle, mineral art photography, 8K resolution.`
        },
        marmer: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a black peci and a pristine white koko shirt, sitting in a stone-carving workshop with marble dust and chisels. He is proudly presenting a magnificent miniature mosque sculpted from marble — lustrous Carrara white marble domes with dramatic grey veining patterns flowing like frozen rivers, tall Verde Guatemala marble minarets in vivid deep emerald-green with white crystalline streaks, walls of Nero Marquina black marble with striking white spider-web veining creating bold dramatic contrast, Calacatta Gold marble archways with rich warm honey-gold and caramel veining, and a base of polished Rosso Levanto marble in deep crimson-red with white calcite patterns arranged in a compass-rose design. The highly polished marble surfaces reflect light with mirror-like intensity. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Dramatic architectural lighting with rich reflections, luxury stone photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing an elegant ivory-white hijab and a dark jade-green kebaya, sitting at a marble-topped table in a kampung setting. She is presenting a stunning miniature mosque carved from marble — gleaming Statuario marble domes in brilliant white with bold grey and gold veining, slender Pink Norweigan marble minarets in vivid rose-pink with crystalline sparkle, walls of Blue Sodalite marble in deep royal-blue with white calcite constellation patterns, Honey Onyx marble windows that glow with warm amber translucence when backlit, and a base combining Emperor Red marble in deep oxblood-crimson with Thassos white marble in a dramatic checkerboard pattern. The marble surfaces are polished to a mirror finish reflecting every detail. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Elegant studio-quality lighting, architectural sculpture photography, 8K resolution.`
        },
        lego: {
            kakek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly man wearing a white peci and a bright red polo shirt, sitting at a large table covered with thousands of colorful LEGO bricks sorted into vivid color groups. He is proudly presenting an incredibly detailed miniature mosque built entirely from LEGO bricks — smooth curved dome sections in brilliant royal blue and vivid white bricks with a golden LEGO crescent on top, tall stepped minarets in bright sunflower-yellow and deep emerald-green bricks with tiny LEGO windows, walls of alternating vivid red, bright orange, and pure white bricks in precise Islamic geometric patterns, arched doorways using curved LEGO pieces in deep purple and bright turquoise, and a baseplate of smooth green LEGO tiles with a courtyard of tan and white bricks featuring tiny LEGO trees and flowers in vivid pink and bright yellow. The colors are the iconic saturated LEGO primary palette. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Bright cheerful studio lighting, toy photography, vivid saturated colors, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a bright coral hijab and a cheerful yellow blouse, sitting beside a large collection of sorted LEGO bricks in rainbow colors. She is presenting a charming miniature mosque made from LEGO bricks — rounded dome sections in bright pastel-pink and lavender bricks with a shiny gold LEGO crescent, elegant minarets in vivid lime-green and bright sky-blue bricks with alternating color-block patterns, walls of vivid magenta, bright orange, and turquoise bricks creating playful geometric designs, stained-glass-style windows using transparent LEGO pieces in vivid red, blue, green, and yellow, and a white LEGO baseplate courtyard with tiny LEGO flower gardens in hot pink, bright purple, and sunshine-yellow. LEGO minifigures are placed as tiny visitors. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Bright playful lighting, toy photography, 8K resolution.`
        },
        kawat: {
            kakek: `A hyper-realistic photograph of a 69-year-old Indonesian elderly man wearing a black peci and a dark grey work shirt with rolled-up sleeves, sitting at a metalworking bench with pliers and wire coils. He is proudly showcasing an intricate miniature mosque sculpted entirely from wire — shimmering copper wire domes twisted into dense arabesgue spiral patterns in warm rose-gold and burnt-orange tones, tall silver aluminum wire minarets with precisely coiled spring details catching light like tiny mirrors, walls of woven brass wire mesh in rich golden-yellow creating a lattice of overlapping geometric Islamic star patterns, anodized blue wire accent arches in vivid electric cobalt, red enamel-coated copper wire window frames in bright cherry-red, and a base of interwoven steel and copper wire in alternating gunmetal-grey and warm bronze creating a complex mandala pattern. The wire surfaces catch light at every angle. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Dramatic directional lighting emphasizing metallic reflections, wire art sculpture photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a warm bronze hijab and a dark brown batik blouse, sitting at a craft table with coils of colorful wire and jewelry tools. She is presenting a delicate miniature mosque made from wire — elegantly coiled gold-plated wire domes in brilliant warm gold with intricate filigree swirl patterns, slender rose-gold wire minarets with tiny wire crescent finials, walls of woven silver wire creating gossamer-thin lattice patterns in cool platinum shimmer, vivid turquoise anodized wire window frames contrasting with bright copper wire accents, and a base of intertwined wires in purple, emerald-green, and gold creating a flowing floral vine pattern. The mixed metals create a stunning warm-cool color contrast. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Warm directional studio light catching wire reflections, jewelry art photography, 8K resolution.`
        },
        mosaik: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a white peci and a rich cobalt-blue batik shirt, sitting at a work table covered with tiny mosaic tiles in every color. He is proudly presenting a magnificent miniature mosque decorated entirely in mosaic tiles — domes covered in tiny iridescent glass mosaic tiles in vivid cobalt-blue, rich turquoise, and brilliant gold creating swirling Islamic arabesque patterns, minarets wrapped in vertical bands of vivid ruby-red, emerald-green, and sapphire-blue mosaic, walls of hand-cut ceramic tiles in electric orange, deep purple, bright magenta, and sunshine-yellow arranged in mesmerizing geometric zellige patterns, arched windows of translucent glass mosaic in stained-glass-style depicting floral motifs in vivid crimson and teal, and a base of polished marble mosaic in classic black-and-white with gold accent lines. The mosaic surfaces glitter with thousands of tiny reflections. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Bright clear light maximizing mosaic sparkle, architectural detail photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly woman wearing a vivid teal hijab and a white kebaya with gold embroidery, sitting beside trays of sorted colorful mosaic tiles and grouting tools. She is presenting a stunning miniature mosque covered in mosaic — domes of shimmering Venetian glass smalti tiles in vivid royal-blue and bright turquoise with gold leaf tessera accents creating sun-ray patterns, minarets of iridescent mother-of-pearl mosaic tiles in swirling rainbow colors, walls of hand-cut Moroccan zellige tiles in vivid saffron-yellow, deep crimson, bright emerald, and cobalt-blue arranged in complex star-and-cross patterns, windows of Byzantine-style gold glass mosaic on a deep blue background, and a base of classic Roman-style mosaic in warm terracotta-red, cream, and black creating a flowing vine pattern. Every surface sparkles with color. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Brilliant warm light, mosaic art photography, 8K resolution.`
        },
        resin: {
            kakek: `A hyper-realistic photograph of a 66-year-old Indonesian elderly man wearing a white peci and a clean dark navy shirt, sitting at a modern craft workspace with resin bottles and molds. He is proudly presenting a spectacular miniature mosque made entirely from crystal-clear epoxy resin — transparent resin domes with embedded vivid electric-blue and deep purple alcohol ink swirls creating galaxy-like cosmic patterns visible through the crystal-clear surface, tall resin minarets with suspended gold leaf flakes and bright turquoise pigment veins frozen mid-flow, walls of opaque resin in vivid ocean-teal and bright coral-orange with pearlescent shimmer powder creating a color-shifting effect, windows of transparent resin with embedded real tiny dried flowers in vivid red, yellow, and purple, and a base of deep black resin with embedded LED-lit fiber optics creating a starfield effect beneath the mosque. The resin surfaces are polished to a glass-like finish. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Dramatic UV-reactive lighting, modern resin art photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a deep ocean-blue hijab and a white cotton blouse, sitting at a clean workspace with resin supplies and silicone molds. She is presenting a breathtaking miniature mosque made from resin — crystal-clear resin domes with swirling embedded pigments in vivid magenta, electric teal, and bright gold creating mesmerizing ocean-wave patterns frozen in time, elegant resin minarets with suspended holographic glitter and pearl-white pigment creating an opal-like color-shifting effect, walls of translucent resin in vivid sunset-orange graduating to deep violet with tiny embedded seashells and gold flakes visible inside, windows of transparent resin casting vivid colored shadows in ruby-red and emerald-green, and a base of deep midnight-blue resin with embedded phosphorescent particles that glow in the dark like a sea of bioluminescent stars. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Dramatic artistic lighting showing resin translucency, modern craft photography, 8K resolution.`
        },
        kulit_telur: {
            kakek: `A hyper-realistic photograph of a 68-year-old Indonesian elderly man wearing a brown peci and a cream-white koko shirt, sitting at a wooden table with bowls of sorted crushed eggshells in various colors — white chicken eggshells, speckled brown duck eggshells, pale blue-green quail eggshells, and shells dyed in vivid colors. He is proudly presenting an incredibly intricate miniature mosque decorated with eggshell mosaic — domes covered in finely crushed pure white eggshell creating a crackle-glaze texture like ancient porcelain, minarets decorated with vivid turquoise-dyed and bright crimson-dyed eggshell pieces in alternating spiral bands, walls of natural speckled brown eggshell arranged in organic mosaic patterns interspersed with vivid saffron-yellow and deep cobalt-blue dyed shell pieces forming Islamic geometric stars, windows framed with tiny pale blue quail eggshell, and a base of mixed eggshell mosaic in vivid emerald-green, bright coral, and pristine white creating a garden-tile pattern. The crackle texture of the eggshell is extraordinarily detailed. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Bright detailed macro lighting, mosaic art photography, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 64-year-old Indonesian elderly woman wearing a soft cream hijab and a pale sage-green kebaya, sitting at a table with sorted eggshell pieces and fine brushes for dyeing. She is presenting a delicate miniature mosque decorated in eggshell art — domes of finely crushed snow-white eggshell with a beautiful crackle texture, hand-dyed eggshell pieces in vivid rose-pink and bright lavender creating petal-like patterns on the dome surface, minarets decorated with eggshell dyed in bright sunshine-yellow and vivid mint-green in delicate striped patterns, walls of natural brown speckled eggshell mixed with vivid tangerine-orange and deep plum-purple dyed pieces creating floral mosaic designs, and a base of eggshell pieces dyed in graduating colors from bright coral through warm peach to pale cream creating a beautiful ombré mosaic. Each tiny eggshell piece is placed with tweezers-precision. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Soft detailed lighting, delicate craft photography, 8K resolution.`
        },
        kopi: {
            kakek: `A hyper-realistic photograph of a 67-year-old Indonesian elderly man wearing a dark brown peci and a cream koko shirt, sitting at a rustic wooden table surrounded by burlap sacks of aromatic coffee beans in a highland kampung setting. He is proudly showcasing a rich miniature mosque built entirely from coffee beans — domes of dark-roasted whole coffee beans in deep espresso-brown and nearly black French-roast creating a smooth lustrous surface, minarets of medium-roast beans in warm chestnut-brown and rich amber, walls of green unroasted coffee beans in vivid olive-green and pale chartreuse contrasting boldly with dark-roast beans creating dramatic two-tone geometric patterns, archways of peaberry beans in deep chocolate, windows framed with pale golden dried coffee cherry husks (cascara), and a base of coarsely ground coffee in varying grind sizes from dark-roast powder to light-roast granules creating an ombré effect from nearly black to warm caramel-tan. The rich aroma of coffee fills the air. The setting shows a traditional village with wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby. Warm rich café-style lighting, coffee art photography, aromatic atmosphere, 8K resolution.`,
            nenek: `A hyper-realistic photograph of a 65-year-old Indonesian elderly woman wearing a warm coffee-brown hijab and a cream batik blouse with brown accents, sitting in a highland kampung coffee garden with coffee trees bearing bright red cherries behind her. She is presenting a stunning miniature mosque made from coffee — glossy dark-roast bean domes in deep rich brown with an almost-black sheen, elegant light-roast bean minarets in warm honey-amber and golden-brown, walls of mixed green beans in vivid olive and pale sage contrasting with dark espresso beans in striking checkerboard patterns, white parchment coffee bean hulls forming delicate window decorations in pale ivory-cream, archways of bright red dried coffee cherries adding a pop of vivid crimson, and a base of fine Turkish-ground coffee in deep mahogany-brown with latte-art-style swirled patterns of lighter cinnamon-brown coffee powder. A steaming cup of black coffee sits beside the mosque. The setting shows thatched-roof wooden houses, a small vegetable garden, clotheslines with batik fabric, free-range chickens, and a cow resting under a shady mango tree. Rich warm moody café lighting, coffee culture photography, 8K resolution.`
        }
    },
    video: {
        pasir: {
            kakek: `[Detik 0-5] Cinematic wide establishing shot of a peaceful Indonesian village (kampung) at golden hour. Static wide shot shows thatched-roof wooden houses, coconut palm trees swaying gently, chickens pecking at the ground, and a cow resting under a shady tree.

[Detik 5-12] Cut to a medium shot of a 65-year-old Indonesian elderly man (kakek) wearing a white peci and brown batik shirt, sitting on a wooden bench in front of his rustic wooden house. He looks at the camera with a warm smile and speaks directly:

Dialog kakek: "Assalamualaikum warahmatullahi wabarakatuh... Apa kabar semuanya? Hari ini kakek mau bikin sesuatu yang spesial. Masjid dari pasir! Ya, dari pasir biasa ini, InsyaAllah bisa jadi karya yang indah."

[Detik 12-25] He carefully shapes and smooths a miniature mosque made entirely from fine golden sand. His weathered hands gently form the domes, minarets, and arched doorways with precision.

Dialog kakek (sambil bekerja): "Nah, ini pasirnya kakek ambil dari sungai belakang rumah. Pasir sungai itu bagus, halus... Sekarang kakek bentuk dulu kubahnya ya. Pelan-pelan aja, yang penting sabar. Kalau bikin masjid itu harus dengan hati yang ikhlas."

[Detik 25-38] A steady close-up shot reveals intricate details of the sand mosque — the textured walls, the crescent finial on top, the tiny courtyard with a sand pathway. The kakek smiles warmly at the camera, nodding with satisfaction.

Dialog kakek: "Alhamdulillah... Lihat, kubahnya sudah jadi. Sekarang tinggal menaranya. Kakek bikin empat menara ya, seperti masjid-masjid besar. Terus di atasnya kita kasih bulan sabit. Cantik kan?"

[Detik 38-50] Close-up shots of the sand mosque details. A rooster crows nearby. A gentle breeze rustles the banana leaves.

Dialog kakek (bangga): "MasyaAllah, sudah jadi! Masjid pasir ini kakek persembahkan untuk cucu-cucu kakek. Supaya mereka tahu, dari bahan sederhana pun kita bisa bikin sesuatu yang indah. Yang penting niatnya baik dan penuh kesabaran."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Ambient village sounds — roosters crowing, crickets chirping, birds singing, distant cow mooing, gentle wind through palm trees, soft gamelan music in the background.`,
            nenek: `[Detik 0-5] Cinematic wide establishing shot of a traditional Indonesian kampung at soft morning light. Mist rises gently from rice paddies in the distance. A peaceful scene shows bamboo fences, papaya trees, and a small mosque in the village.

[Detik 5-12] Cut to a warm medium shot of a 67-year-old Indonesian elderly woman (nenek) wearing a cream hijab and brown batik dress, sitting on the shaded veranda (teras) of her wooden house. She looks up at the camera with a gentle smile.

Dialog nenek: "Assalamualaikum anak-anak... Nenek senang sekali hari ini karena mau bikin masjid kecil dari pasir. Cantik lho nanti hasilnya, InsyaAllah."

[Detik 12-22] She carefully molds a miniature mosque from fine sand, pressing details into the domes and sculpting tiny minarets with her fingers.

Dialog nenek (sambil membentuk): "Pasirnya ini nenek ayak dulu biar halus. Nah, sekarang kita bentuk kubahnya pelan-pelan... Hati-hati ya, jangan sampai runtuh. Bikin masjid itu perlu kesabaran, sama seperti ibadah kita."

[Detik 22-35] The camera captures her focused expression, then slowly zooms out to reveal the completed sand mosque — beautiful golden sand domes, textured walls, arched windows, and a small sand courtyard with tiny sand trees. She places the final crescent on top of the main dome.

Dialog nenek: "Alhamdulillah... Tinggal pasang bulan sabitnya di atas kubah. Nah, sudah cantik! Lihat, ada jendela-jendelanya juga, ada halamannya. MasyaAllah, indah ya kalau kita tekun."

[Detik 35-48] Cut to beauty shots of the sand mosque from multiple angles as golden light falls across it. Chickens walk past in the background. A cat stretches lazily on the porch.

Dialog nenek (tersenyum bangga): "Ini dia masjid pasir nenek. Sederhana tapi dibuat dengan cinta. Nenek harap bisa menginspirasi kalian semua untuk berkreasi dengan bahan-bahan yang ada di sekitar kita."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Morning ambiance — crickets transitioning to birdsong, a distant rooster crowing, cowbell sounds, soft breeze through leaves, the gentle sounds of sand being shaped. Soft traditional music in the background.`
        },
        tanah: {
            kakek: `[Detik 0-5] Cinematic wide shot of an Indonesian kampung at dawn. Mist lingers over the rice fields. Establishing shot shows the village with wooden houses, banana trees, and a grazing cow.

[Detik 5-12] Cut to a 68-year-old Indonesian elderly man wearing a black peci and white koko shirt, sitting on a low wooden stool in his courtyard. He looks at the camera with a wise smile.

Dialog kakek: "Assalamualaikum warahmatullahi wabarakatuh. Jumpa lagi sama kakek! Kali ini kakek mau bikin masjid dari tanah liat. Tanah yang biasa kita injak ini, InsyaAllah bisa jadi karya seni yang indah."

[Detik 12-22] He carefully molds and shapes a miniature mosque from reddish-brown clay (tanah liat). His experienced hands press intricate patterns into the clay walls, form smooth domes, and sculpt tall minarets.

Dialog kakek (sambil membentuk tanah): "Tanah liatnya ini kakek ambil dari tepi sungai. Lihat warnanya, merah kecoklatan, cantik sekali. Sekarang kita uleni dulu biar lembut... Nah, pelan-pelan kita bentuk dindingnya. Yang penting itu tekun dan telaten."

[Detik 22-35] Time-lapse sequence of the clay mosque taking shape. Close-up of clay being smoothed, details being carved with a small stick. The rich earthy texture of the clay is highlighted.

Dialog kakek: "Nah, sekarang kubahnya ya. Kakek bentuk bulat dulu, terus kita haluskan. Seni itu butuh kesabaran. Sama seperti kita membangun iman, pelan-pelan tapi istiqomah."

[Detik 35-48] The completed clay mosque is revealed — beautiful reddish-brown with detailed arches, textured walls, and crescent finials. The kakek holds it up proudly against the kampung backdrop.

Dialog kakek (bangga): "Alhamdulillah, MasyaAllah! Sudah jadi masjid tanah liat kakek. Lihat detail lengkungannya, menaranya, bulan sabitnya. Dari tanah yang sederhana, bisa jadi sesuatu yang luar biasa kalau kita mau berusaha."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Village morning sounds — rooster crowing, birds singing, goat bleating, distant call to prayer, clay squishing and molding sounds. Gentle traditional music.`,
            nenek: `[Detik 0-5] Cinematic wide establishing shot of a traditional Indonesian kampung at soft morning light. Mist rises gently from rice paddies in the distance. A peaceful scene shows bamboo fences, papaya trees, and a small mosque in the village.

[Detik 5-12] Cut to a warm medium shot of a 67-year-old Indonesian elderly woman (nenek) wearing a cream hijab and brown batik dress, sitting on the shaded veranda (teras) of her wooden house. She smiles gently.

Dialog nenek: "Assalamualaikum sayang... Hari ini nenek mau bikin masjid cantik dari tanah liat. Tanah liat ini berkah dari Allah, dari bumi yang kita pijak setiap hari."

[Detik 12-22] She carefully molds a miniature mosque from reddish-brown clay (tanah liat), pressing details into the domes and sculpting tiny minarets with her fingers.

Dialog nenek (sambil bekerja): "Nenek uleni dulu tanahnya biar lentur. Nah, sekarang kita bentuk dindingnya satu per satu. Pelan-pelan ya... Kalau terburu-buru nanti hasilnya nggak rapi. Semua yang indah itu butuh waktu dan kesabaran."

[Detik 22-35] The camera captures her focused expression, then slowly zooms out to reveal the completed clay mosque — beautiful earthy brown domes, textured walls, arched windows, and a small clay courtyard with tiny clay trees. She places the final crescent on top of the main dome.

Dialog nenek: "Alhamdulillah, sudah jadi! Cantik ya? Warna coklatnya alami sekali. Nenek suka banget sama teksturnya. Ini bukti bahwa dari hal sederhana pun kita bisa menciptakan keindahan."

[Detik 35-48] Cut to beauty shots of the clay mosque from multiple angles as golden light falls across it. Chickens walk past in the background. A cat stretches lazily on the porch.

Dialog nenek (tersenyum): "MasyaAllah, kalau dilihat dari samping juga bagus ya. Masjid tanah liat nenek ini spesial karena dibuat dengan penuh cinta."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Morning ambiance — crickets transitioning to birdsong, a distant rooster crowing, cowbell sounds, soft breeze through leaves, the gentle sounds of clay being shaped. Soft traditional music.`
        },
        buah: {
            kakek: `[Detik 0-5] Cinematic close-up of tropical fruits — watermelons, pineapples, dragon fruits, mangoes, and rambutans — spread on a rustic wooden table. A wide shot reveals a lush Indonesian kampung setting behind.

[Detik 5-12] A 66-year-old Indonesian elderly man wearing a white peci and sage green shirt sits at the table. He looks at the camera with excitement.

Dialog kakek: "Assalamualaikum! Wah, hari ini kakek senang sekali karena mau bikin masjid dari buah-buahan! Lihat ini, ada semangka, nanas, buah naga, mangga, rambutan — semua buah segar dari kebun kampung kita."

[Detik 12-25] He carefully assembles a miniature mosque from fresh fruits. He places watermelon slices as domes, positions pineapple pieces as minarets, arranges dragon fruit walls, and creates archways from mango slices.

Dialog kakek (sambil menyusun): "Nah, semangka ini kakek potong setengah buat kubahnya. Pas kan? Warna merahnya cantik. Terus nanasnya kita jadikan menara — warnanya kuning keemasan, seperti masjid asli! Haha..."

[Detik 25-38] Time-lapse sequence showing the fruit mosque taking shape. The camera captures the vibrant colors and textures — the red of dragon fruit, golden pineapple, green watermelon rind creating beautiful contrast.

Dialog kakek: "Buah naga ini kita pakai buat dindingnya. Lihat warnanya, pink kemerahan, unik sekali. Terus mangga ini kakek iris tipis buat lengkungan pintunya. Subhanallah, buah-buahan ciptaan Allah memang luar biasa indah ya."

[Detik 38-50] Wide shot revealing the completed fruit mosque in all its colorful glory, with the kampung village behind — coconut trees, bamboo houses, children playing near a stream, chickens and ducks wandering around.

Dialog kakek (mengangkat masjid dengan bangga): "Alhamdulillah! Sudah jadi masjid buah-buahan kakek! Warna-warni, segar, cantik. Ini mengajarkan kita bahwa Allah menciptakan alam ini penuh keindahan, tinggal kita yang harus pandai bersyukur."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Village ambiance — chickens clucking, ducks quacking, children laughing in the distance, birds chirping, wind rustling through palms. Upbeat traditional Indonesian music.`,
            nenek: `[Detik 0-5] Cinematic close-up of colorful tropical fruits on a wooden table — papaya, bananas, coconut, oranges, grapes, and guava. Cut to a wide shot of a kampung setting.

[Detik 5-12] A 64-year-old Indonesian elderly woman wearing a pastel pink hijab and patterned batik blouse looks at the camera with a cheerful smile.

Dialog nenek: "Assalamualaikum anak-anak! Hari ini nenek mau bikin sesuatu yang unik — masjid dari buah-buahan! Seru kan? Ayo kita mulai ya."

[Detik 12-22] She carefully arranges fruits into a miniature mosque. She places papaya halves as domes, banana pieces as minarets, coconut shell as the base, and orange slices as windows.

Dialog nenek (sambil menyusun): "Pepaya ini nenek belah dua buat kubahnya. Wah, pas banget bentuknya! Terus pisang ini kita potong buat menaranya. Tempurung kelapa ini jadi alasnya — kuat dan kokoh."

[Detik 22-35] Close-up montage of her skilled hands assembling each detail. The colors are vibrant and appetizing — warm oranges, creamy yellows, rich greens.

Dialog nenek: "Irisan jeruk ini cantik ya buat jendela masjidnya, bulat-bulat kecil. Terus anggur ini nenek susun buat hiasan. MasyaAllah, buah-buahan ciptaan Allah memang penuh warna dan keindahan."

[Detik 35-48] The completed fruit mosque is revealed in a slow pan — a stunning colorful creation glowing in the warm sunlight. The nenek sits proudly beside it, the kampung stretching behind her with wooden houses, orchids, chickens, and a well.

Dialog nenek (bangga): "Alhamdulillah, jadi sudah masjid buah nenek! Warna-warni, segar, bikin senang melihatnya. Semoga bisa menginspirasi kalian untuk berkreasi dengan bahan apa saja yang ada di sekitar kita."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Village sounds — birds singing, roosters, gentle breeze, cat purring nearby. Cheerful traditional music.`
        },
        sayuran: {
            kakek: `[Detik 0-5] Cinematic wide static shot of a kampung vegetable garden at sunrise — rows of cabbages, chilies, tomatoes, eggplants, and corn. A hen and her chicks walk between the rows.

[Detik 5-12] Cut to a 70-year-old Indonesian elderly man wearing a brown peci and plaid flannel shirt, sitting on a bamboo bench. Around him are baskets of fresh vegetables. He grins at the camera.

Dialog kakek: "Assalamualaikum! Hari ini kakek mau bikin masjid dari sayuran! Ya, sayuran dari kebun sendiri. Kol, wortel, terong, kacang panjang, cabai — semua ada. Ayo kita mulai!"

[Detik 12-25] Close-up montage: His hands place cabbage halves as domes, stack carrot sticks as minarets, arrange eggplant slices as walls, weave long beans as arched doorways, and top the dome with a chili pepper crescent.

Dialog kakek (sambil menyusun): "Kol ini bulat, pas banget buat kubah masjid. Wortel yang panjang-panjang ini kita jadikan menara. Terong ungu ini buat dindingnya — warnanya bagus kan? Terus kacang panjang ini kakek lengkungkan jadi pintu gerbang."

[Detik 25-38] More assembly details. The kakek places corn kernels as decorations and shapes a cucumber courtyard base.

Dialog kakek: "Nah, yang terakhir — cabai merah ini kita taruh di atas kubah jadi bulan sabit! Haha, pedas tapi cantik! Subhanallah, sayuran ciptaan Allah itu nggak cuma buat dimasak, tapi juga bisa jadi karya seni."

[Detik 38-50] The camera slowly reveals the completed vegetable mosque — a stunning creation of natural greens, purples, oranges, and reds. The kakek sits proudly beside his vegetable mosque, the kampung behind — wooden houses, banana trees, chickens, and a goat tied to a post.

Dialog kakek (bangga): "Alhamdulillah, jadi! Masjid sayuran kakek. Hijau, ungu, oranye, merah — warna-warni alami dari kebun. Indah ya? Ini bukti bahwa keindahan bisa datang dari mana saja."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Rural morning sounds — rooster crowing, birds waking up, goat bleating, cow mooing, sizzling from cooking stove. Gentle background music.`,
            nenek: `[Detik 0-5] Cinematic wide static shot of a kampung vegetable garden at sunrise — fresh vegetables glistening with morning dew. A hen and her chicks walk through the garden.

[Detik 5-12] A 65-year-old Indonesian elderly woman wearing a white hijab and dark green kebaya sits at a wooden table under a jackfruit tree. Baskets of vegetables surround her. She looks at the camera warmly.

Dialog nenek: "Assalamualaikum anak-anak... Nenek baru panen sayuran dari kebun. Daripada langsung dimasak, bagaimana kalau kita bikin masjid dulu? Yuk!"

[Detik 12-22] Close-up of her hands: placing a pumpkin half as the main dome, stacking asparagus as minarets, arranging tomato slices as windows, planting broccoli as miniature trees, and layering lettuce as the base.

Dialog nenek (sambil menyusun): "Labu kuning ini bentuknya bulat, cocok sekali jadi kubah masjid. Asparagus yang tinggi-tinggi ini nenek jadikan menara. Irisan tomat merahnya cantik buat jendela... Brokoli ini jadi pohon-pohon kecil di halaman masjid."

[Detik 22-35] More detail shots of assembly. She carefully arranges each piece with precision.

Dialog nenek: "Selada ini nenek tata rapi jadi alas halamannya. Hijau segar, seperti taman surga InsyaAllah. MasyaAllah, sayur-mayur itu selain sehat dimakan, ternyata juga bisa jadi karya seni yang indah lho."

[Detik 35-48] The completed vegetable mosque is revealed in beautiful detail. She places it on display with pride. The kampung background shows thatched-roof houses, drying rice, hens and chicks, and smoke from a clay stove.

Dialog nenek (tersenyum bangga): "Alhamdulillah sudah jadi! Cantik banget kan? Masjid sayuran nenek ini pesan moralnya — kita harus bersyukur atas semua nikmat Allah, termasuk sayur-sayuran ini."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Rural morning sounds — rooster crowing, crickets fading, birds singing, goat bleating, distant call to prayer, cooking sounds. Gentle traditional music.`
        },
        kayu: {
            kakek: `[Detik 0-5] Cinematic close-up shot of woodworking — shavings curling from a chisel, a hand smoothing polished teak, the grain of beautiful hardwood.

[Detik 5-12] Cut to a medium shot of a 68-year-old Indonesian elderly man wearing a black peci and white collarless shirt, working in his open-air woodworking area beside his kampung house. He looks at the camera.

Dialog kakek: "Assalamualaikum warahmatullahi wabarakatuh. Kakek hari ini mau bikin masjid dari kayu jati. Kayu jati ini istimewa — kuat, tahan lama, dan seratnya indah sekali. Ini warisan nenek moyang kita."

[Detik 12-25] He meticulously carves a miniature mosque from teak wood. The camera captures every detail — his experienced hands guiding the chisel to create lattice windows, his knife shaping the dome's curve, sanding the minarets to smooth perfection.

Dialog kakek (sambil memahat): "Kakek mulai dari kubahnya dulu ya. Pelan-pelan kita pahat melengkung... Nah, ini yang susah, harus presisi. Kalau salah sedikit, bisa rusak kayunya. Tapi nggak apa-apa, namanya juga belajar."

[Detik 25-38] Time-lapse of the carving process, with wood shavings piling up. Bird cages hanging from the eaves sway gently. A cat watches from a windowsill.

Dialog kakek: "Sekarang jendela jalinya. Ini motif Jawa klasik — geometris, rapi, penuh makna. Nenek moyang kita sudah mengukir seperti ini ratusan tahun lalu. Kakek cuma melanjutkan tradisi."

[Detik 38-50] The completed wooden mosque is revealed in a dramatic slow push-in shot — the rich brown teak with its beautiful grain, intricate Javanese carved patterns on the doors, perfectly proportioned minarets, and a polished base. It gleams in the warm afternoon light. The kakek holds the mosque up, turning it slowly to show all sides.

Dialog kakek (mengangkat masjid): "Alhamdulillah! MasyaAllah, lihat seratnya, lihat warnanya. Masjid kayu jati ini kakek bikin dengan sepenuh hati. Seni ukir kayu ini adalah budaya kita yang harus kita jaga dan lestarikan."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Wood carving sounds — rhythmic chiseling, gentle scraping, sanding. Bird songs, rooster crows, distant village chatter, bamboo wind chimes. Calm traditional Javanese music.`,
            nenek: `[Detik 0-5] Cinematic close-up of beautiful wood textures — rich mahogany, pale sandalwood, warm teak. Cut to a wide shot of a kampung veranda.

[Detik 5-12] A 66-year-old Indonesian elderly woman wearing a dark brown hijab and burgundy batik blouse sits on the veranda of a Javanese wooden house. She smiles softly at the camera.

Dialog nenek: "Assalamualaikum... Nenek hari ini bikin masjid dari kayu. Ada kayu mahoni, kayu cendana, kayu jati — masing-masing punya warna dan karakter tersendiri. Cantik semuanya."

[Detik 12-22] She delicately assembles a miniature mosque from various wood pieces — fitting mahogany domes, positioning sandalwood minarets, and placing teak walls with carved patterns.

Dialog nenek (sambil merakit): "Kubah dari mahoni ini warnanya coklat kemerahan, hangat. Menara dari cendana — harum lho baunya. Dindingnya dari jati dengan ukiran motif bunga. Nenek suka banget kombinasi warnanya."

[Detik 22-35] Close-up of her careful hands as she positions each piece. The natural wood color variations create stunning contrast. She adds tiny wooden trees to the base.

Dialog nenek: "Pohon-pohon kecil ini nenek taruh di halaman masjidnya. Biar ada taman yang teduh. MasyaAllah, indah ya kalau kayu-kayu ini dipadukan? Alam ciptaan Allah memang penuh keajaiban."

[Detik 35-48] The completed wooden mosque is shown from multiple angles — the craftsmanship is exquisite, with natural wood tones glowing in soft light. The kampung behind shows jasmine bushes, a wooden well, chickens, and rice terraces.

Dialog nenek (bangga): "Alhamdulillah, sudah jadi! Masjid kayu nenek. Setiap potongan kayu punya cerita. Semoga karya ini bisa menginspirasi kalian untuk menghargai keindahan alam dan budaya kita."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Soft wood placement sounds, birds singing, gentle breeze, chickens clucking, distant gamelan. Soft traditional music.`
        },
        bambu: {
            kakek: `[Detik 0-5] Cinematic wide shot of a bamboo grove swaying in the breeze, sunlight filtering through the dense green stalks. Cut to a wide shot of a traditional Indonesian kampung.

[Detik 5-12] A 67-year-old Indonesian elderly man wearing a white peci and light blue batik shirt sits cross-legged on a bamboo platform (bale-bale). He looks at the camera with a proud grin.

Dialog kakek: "Assalamualaikum warahmatullahi wabarakatuh! Hari ini kakek mau bikin masjid dari bambu. Bambu ini tanaman istimewa — lentur, kuat, dan mudah didapat di kampung kita. Seni anyaman bambu ini sudah turun-temurun dari leluhur."

[Detik 12-25] He weaves and assembles a miniature mosque from bamboo strips and pieces.

Dialog kakek (sambil menganyam): "Pertama kita belah bambunya jadi irisan tipis. Nah, kalau sudah tipis, kita anyam jadi dinding masjid. Lihat polanya — silang-menyilang, rapi dan kokoh. Ini namanya anyaman bambu, kebanggaan budaya Indonesia."

[Detik 25-38] Close-up of his skilled fingers splitting bamboo strips for minarets, weaving anyaman patterns for walls, and bending bamboo to form dome shapes. Each piece fits together precisely.

Dialog kakek: "Menaranya kita pakai bambu yang ramping, lurus ke atas. Kubahnya agak susah nih, harus dilengkungkan pelan-pelan biar nggak patah. Tapi Alhamdulillah, bambu itu lentur, jadi bisa dibentuk indah."

[Detik 38-50] A steady close-up shot reveals the completed bamboo mosque — the woven walls catch the light beautifully, the slender minarets reach upward, and the dome shows an elegant crosshatch pattern. The kakek sits proudly beside the bamboo mosque.

Dialog kakek (bangga): "MasyaAllah, Alhamdulillah! Sudah jadi masjid bambu kakek. Lihat anyamannya, lihat warna alaminya — hijau keemasan. Ini seni asli nusantara. Kakek berharap generasi muda bisa terus melestarikan kerajinan bambu ini."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Bamboo creaking in wind, birds singing, water flowing, crickets chirping, ducks quacking. Soft angklung music.`,
            nenek: `[Detik 0-5] Cinematic stunning wide shot of bamboo grove at golden hour, light streaming through bamboo stalks. Cut to a wide shot of a kampung setting.

[Detik 5-12] A 64-year-old Indonesian elderly woman wearing a light yellow hijab and Javanese batik sits on a woven bamboo mat under a large banyan tree. She smiles warmly at the camera.

Dialog nenek: "Assalamualaikum anak-anak sayang... Nenek mau mengajak kalian bikin masjid dari bambu hari ini. Bambu ini banyak tumbuh di belakang rumah nenek. Yuk kita manfaatkan!"

[Detik 12-22] She weaves a miniature mosque from bamboo.

Dialog nenek (sambil menganyam): "Nenek iris dulu bambunya tipis-tipis. Hati-hati ya, jangan sampai kena tangan. Nah, sekarang kita anyam jadi dinding masjid. Lihat, satu ke atas, satu ke bawah, silang-menyilang. Cantik kan polanya?"

[Detik 22-35] Close-up of her skilled fingers: weaving anyaman bambu patterns for the walls, fitting slender bamboo minarets, shaping the dome with curved bamboo strips. Her movements are graceful and practiced.

Dialog nenek: "Kubahnya ini nenek bentuk dengan bamboo yang dilengkungkan. Harus sabar melenturkannya. Menara-menaranya dari bambu kecil yang lurus. Subhanallah, bambu ciptaan Allah ini serba guna sekali ya."

[Detik 35-48] The completed bamboo mosque is revealed — warm golden-green tones, beautiful woven patterns, elegant proportions. She places it on a bamboo table with pride. The kampung behind her — bamboo houses, vegetable garden, cow grazing, hens and chicks, cooking fire smoke.

Dialog nenek (tersenyum bangga): "Alhamdulillah! Ini dia masjid bambu nenek. Warnanya alami, anyamannya rapi. Nenek bangga sekali sama budaya anyaman Indonesia. Semoga seni ini terus hidup dan berkembang."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Nature sounds — bamboo wind, birds, stream water, crickets, ducks, children's laughter. Soft angklung music.`
        },
        batu: {
            kakek: `[Detik 0-5] Cinematic wide shot of a mountain stream with smooth river stones. Cut to a peaceful Indonesian kampung at morning light.

[Detik 5-10] A 69-year-old Indonesian elderly man wearing a black peci and cream koko shirt sits beside piles of river stones. He smiles at the camera.

Dialog kakek: "Assalamualaikum! Kakek mau bikin masjid dari batu sungai. Batu-batu ini indah, kuat, dan penuh karakter."

[Detik 10-18] He carefully stacks and arranges river stones into a miniature mosque — pebble domes, slate minarets, cobblestone walls.

Dialog kakek (sambil menyusun): "Batu ini kakek susun satu per satu. Kubahnya dari kerikil bulat, menaranya dari batu pipih yang ditumpuk rapi."

[Detik 18-28] Close-up of the stone mosque taking shape. Quartz crystals placed as window accents. The natural stone colors create beautiful patterns.

Dialog kakek: "Nah, kristal kuarsa ini jadi jendelanya. MasyaAllah, batu ciptaan Allah memang luar biasa indahnya."

[Detik 28-38] The completed stone mosque is revealed — gray, brown, white, and amber stones arranged masterfully. The kakek holds it up proudly.

Dialog kakek (bangga): "Alhamdulillah! Masjid batu sungai sudah jadi. Kokoh dan alami, seperti iman kita yang harus kuat."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: River flowing, birds singing, stones clinking, morning breeze. Soft traditional music.`,
            nenek: `[Detik 0-5] Cinematic wide shot of clear mountain stream with colorful pebbles. A peaceful kampung at soft morning light.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing a gray hijab and dark blue batik sits in a kampung courtyard with bowls of sorted stones.

Dialog nenek: "Assalamualaikum sayang... Nenek mau bikin masjid cantik dari batu sungai hari ini."

[Detik 10-18] She arranges smooth pebbles into a miniature mosque with careful precision.

Dialog nenek (sambil menyusun): "Batu-batu bulat ini pas buat kubah. Yang pipih nenek susun jadi dinding. Pelan-pelan ya."

[Detik 18-28] Close-up of her hands placing crystal quartz as window decorations and flat pebbles in concentric courtyard patterns.

Dialog nenek: "Kristal ini jadi hiasan jendela. Cantik ya berkilau-kilau. Subhanallah, alam ini penuh keindahan."

[Detik 28-38] The completed stone mosque shown from multiple angles. Chickens walk past. Warm afternoon light.

Dialog nenek (bangga): "Alhamdulillah, jadi! Masjid batu nenek. Sederhana tapi kokoh dan indah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Stream sounds, birdsong, pebbles clinking, gentle breeze. Soft traditional music.`
        },
        es: {
            kakek: `[Detik 0-5] Cinematic close-up of glistening ice crystals refracting light. Cut to a misty highland kampung setting.

[Detik 5-10] A 65-year-old Indonesian elderly man wearing a white peci and thick green jacket sits at a frost-covered table.

Dialog kakek: "Assalamualaikum! Hari ini kakek bikin masjid dari es. Unik kan? Es yang dingin bisa jadi karya seni!"

[Detik 10-18] He carves and shapes crystal-clear ice into a miniature mosque — transparent domes, frozen minarets.

Dialog kakek (sambil memahat): "Es ini kakek pahat pelan-pelan. Kubahnya harus halus biar cahaya bisa tembus. Indah sekali."

[Detik 18-28] Prismatic light refracts through the ice mosque creating rainbow patterns. Close-up of intricate ice lattice walls.

Dialog kakek: "MasyaAllah, lihat cahayanya! Seperti pelangi di dalam masjid. Subhanallah, keajaiban es."

[Detik 28-38] The completed ice mosque glows ethereally. The kakek admires his creation proudly.

Dialog kakek (bangga): "Alhamdulillah! Masjid es ini mengingatkan kita bahwa keindahan itu sementara, jadi harus dihargai."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Wind howling softly, ice cracking gently, highland birds, cool atmosphere. Ethereal ambient music.`,
            nenek: `[Detik 0-5] Cinematic shot of ice crystals sparkling in cold light. Cut to a misty highland kampung.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing a white hijab and maroon cardigan sits beside blocks of clear ice.

Dialog nenek: "Assalamualaikum... Nenek bikin masjid dari es hari ini. Dingin tapi cantik lho hasilnya!"

[Detik 10-18] She sculpts a miniature mosque from ice — glistening frozen domes, crystalline minarets.

Dialog nenek (sambil memahat): "Esnya nenek bentuk pelan-pelan. Kubahnya harus mulus. Cantik kan bening seperti kaca?"

[Detik 18-28] The ice mosque sparkles with blue and white reflections. Tiny ice crescents top each minaret.

Dialog nenek: "Subhanallah, lihat kilaunya. Seperti istana di negeri dongeng. Allah Maha Pencipta."

[Detik 28-38] The completed ice mosque revealed in ethereal light. She smiles proudly.

Dialog nenek (bangga): "Alhamdulillah! Masjid es nenek. Indah walau tak bertahan lama, seperti pelajaran hidup."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Gentle wind, ice tinkling, highland ambiance, distant birdsong. Ethereal music.`
        },
        cokelat: {
            kakek: `[Detik 0-5] Cinematic close-up of melted chocolate being poured, rich dark brown swirls. Cut to a kampung kitchen setting.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing a brown peci and white koko shirt sits at a rustic table with chocolate bars.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari cokelat. Wangi dan cantik, InsyaAllah!"

[Detik 10-18] He molds and shapes chocolate into a miniature mosque — dark chocolate domes, milk chocolate minarets.

Dialog kakek (sambil membentuk): "Cokelat hitam ini buat kubah. Yang cokelat susu buat menara. Wah, harum sekali ya."

[Detik 18-28] White chocolate lattice windows are placed carefully. Cocoa-dusted walls with arabesque patterns.

Dialog kakek: "Cokelat putih ini jadi jendela. Lalu kakek taburi bubuk kakao di dindingnya. MasyaAllah, cantik!"

[Detik 28-38] The completed chocolate mosque gleams with glossy finish. Rich warm tones.

Dialog kakek (bangga): "Alhamdulillah! Masjid cokelat yang manis. Dari bahan sederhana, jadi karya luar biasa."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Kitchen sounds, birds outside, gentle breeze, warm atmosphere. Cheerful traditional music.`,
            nenek: `[Detik 0-5] Cinematic close-up of chocolate pieces — dark, milk, and white chocolate. Cut to a warm kampung setting.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a chocolate-brown hijab and cream kebaya sits at a table.

Dialog nenek: "Assalamualaikum anak-anak! Nenek bikin masjid dari cokelat. Pasti suka ya!"

[Detik 10-18] She carefully assembles chocolate pieces into a mosque — dark chocolate domes, swirled milk chocolate minarets.

Dialog nenek (sambil menyusun): "Kubahnya dari cokelat hitam. Menaranya dari cokelat susu. Wangi banget ya."

[Detik 18-28] White chocolate arches and cocoa-painted walls take shape. Islamic geometric patterns in chocolate.

Dialog nenek: "Jendela dari cokelat putih. Cantik sekali paduannya. MasyaAllah, kreasi yang manis!"

[Detik 28-38] The glossy chocolate mosque is revealed. Rich, warm, inviting.

Dialog nenek (bangga): "Alhamdulillah! Masjid cokelat nenek sudah jadi. Indah dan harum."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Gentle kitchen ambiance, birds, breeze, warm atmosphere. Soft cheerful music.`
        },
        kaca: {
            kakek: `[Detik 0-5] Cinematic close-up of stained glass catching sunlight, prismatic colors dancing. Cut to a bright kampung workshop.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing a white peci and navy batik shirt sits in a sunlit workshop.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari kaca warna-warni. Kalau kena cahaya, indah luar biasa!"

[Detik 10-18] He assembles colored glass pieces — green, blue, red, gold glass forming domes and minarets.

Dialog kakek (sambil merakit): "Kaca hijau dan biru ini buat kubah. Menaranya dari kaca bening. Hati-hati ya, pelan-pelan."

[Detik 18-28] Sunlight streams through creating kaleidoscopic patterns. Leaded glass windows with Islamic geometric designs.

Dialog kakek: "Lihat cahayanya tembus! Warna-warni seperti pelangi. Subhanallah, indahnya ciptaan Allah."

[Detik 28-38] The completed glass mosque dazzles with prismatic reflections. Mirrored courtyard floor.

Dialog kakek (bangga): "Alhamdulillah! Masjid kaca kakek berkilau bagai permata. Seni yang memukau!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Glass chiming, birds, gentle wind, light tinkling sounds. Ambient traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of colored glass pieces sparkling in sunlight. A bright kampung setting.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing a pastel blue hijab and white batik sits beside glass pieces.

Dialog nenek: "Assalamualaikum... Nenek bikin masjid dari kaca cantik. Berkilau seperti permata!"

[Detik 10-18] She assembles mosaic glass domes in turquoise and gold, slender glass minarets.

Dialog nenek (sambil merakit): "Kaca warna toska ini buat kubah. Menaranya dari kaca bening tipis. Hati-hati ya."

[Detik 18-28] Stained glass windows and crystal base reflect colorful light beautifully.

Dialog nenek: "MasyaAllah, kalau kena matahari, warnanya cantik sekali. Seperti jendela masjid sungguhan."

[Detik 28-38] The completed glass mosque sparkles brilliantly.

Dialog nenek (bangga): "Alhamdulillah! Masjid kaca nenek. Berkilau indah, subhanallah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Glass tinkling, birdsong, gentle breeze. Light ambient music.`
        },
        kertas: {
            kakek: `[Detik 0-5] Cinematic close-up of colorful paper sheets fanning out. Cut to a kampung veranda with morning light.

[Detik 5-10] A 66-year-old Indonesian elderly man wearing a black peci and gray koko shirt sits at a desk with paper and scissors.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari kertas. Seni origami dan kirigami, indah sekali!"

[Detik 10-18] He folds and cuts paper into mosque shapes — origami domes, quilled paper minarets.

Dialog kakek (sambil melipat): "Kertas ini kakek lipat jadi kubah. Lalu digulung kecil-kecil buat menara. Sabar dan teliti ya."

[Detik 18-28] Paper-cut lattice windows and layered walls with Islamic geometric cutout patterns take shape.

Dialog kakek: "Jendela jalinya kakek gunting motif geometris. Rapi kan? Seni kertas itu butuh ketelitian."

[Detik 28-38] The completed paper mosque in white and gold — delicate, intricate, beautiful.

Dialog kakek (bangga): "Alhamdulillah! Masjid kertas yang lembut tapi penuh detail. Karya seni dari kesabaran."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Paper rustling, scissors cutting, birds, morning breeze. Calm traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of pastel paper sheets and craft tools. A warm kampung morning.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a mint green hijab and floral batik sits with colorful paper.

Dialog nenek: "Assalamualaikum anak-anak! Nenek bikin masjid dari kertas. Cantik dan kreatif!"

[Detik 10-18] She creates kirigami domes, quilling minarets, paper-cut jali windows with practiced hands.

Dialog nenek (sambil membuat): "Kertas ini nenek lipat dan gunting. Pelan-pelan bentuk kubahnya. Warna pastel, lembut cantik."

[Detik 18-28] Layered paper walls with embossed patterns and a base of woven paper strips are added.

Dialog nenek: "Lihat dindingnya, berlapis-lapis. Jendelanya digunting motif bunga. MasyaAllah, cantik!"

[Detik 28-38] The completed paper mosque in cream, gold, and soft green is revealed.

Dialog nenek (bangga): "Alhamdulillah! Masjid kertas nenek. Lembut seperti doa yang tulus."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Paper sounds, birds, gentle breeze. Soft music.`
        },
        lilin: {
            kakek: `[Detik 0-5] Cinematic close-up of flickering candle flames, warm golden light. Cut to a cozy kampung evening setting.

[Detik 5-10] A 69-year-old Indonesian elderly man wearing white peci and dark brown batik sits beside candles and beeswax blocks.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari lilin. Kalau dinyalakan, bercahaya indah!"

[Detik 10-18] He sculpts wax into mosque shapes — honey-colored wax domes, carved wax minarets.

Dialog kakek (sambil membentuk): "Lilin lebah ini kakek bentuk jadi kubah. Pelan-pelan dipahat. Warnanya kuning keemasan, hangat."

[Detik 18-28] Translucent wax walls glow from within. Tiny wax lanterns placed around the base. Candle flames flicker.

Dialog kakek: "Kalau ada cahaya dari belakang, dindingnya tembus cahaya. MasyaAllah, seperti bersinar!"

[Detik 28-38] The completed wax mosque glows warmly in candlelight. Magical golden atmosphere.

Dialog kakek (bangga): "Alhamdulillah! Masjid lilin yang bercahaya. Seperti lentera di malam hari."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Candle flickering, crickets, night birds, gentle breeze. Warm ambient music.`,
            nenek: `[Detik 0-5] Cinematic shot of warm candlelight glowing softly. A cozy kampung evening.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing cream hijab and brown batik sits at a candlelit table.

Dialog nenek: "Assalamualaikum sayang... Nenek bikin masjid dari lilin. Hangat dan cantik!"

[Detik 10-18] She molds colored wax — ivory domes, golden minarets, pastel wax walls.

Dialog nenek (sambil membentuk): "Lilinnya nenek bentuk pelan-pelan. Warna putihnya elegan. Yang kuning jadi menara."

[Detik 18-28] Tea candles placed around the base create magical warm glow. Wax flower decorations added.

Dialog nenek: "Nenek hias dengan bunga dari lilin. Kalau dinyalakan, bersinar cantik. Subhanallah!"

[Detik 28-38] The completed wax mosque glows ethereally.

Dialog nenek (bangga): "Alhamdulillah! Masjid lilin nenek. Bercahaya indah di malam hari."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Candle sounds, night crickets, gentle atmosphere. Warm music.`
        },
        gula: {
            kakek: `[Detik 0-5] Cinematic close-up of sparkling sugar crystals catching light. Cut to a bright kampung morning.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing brown peci and white koko shirt sits with bowls of sugar.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari gula. Berkilau seperti berlian!"

[Detik 10-18] He shapes spun sugar domes, constructs caramelized sugar minarets in amber tones.

Dialog kakek (sambil membentuk): "Gula pasir ini kakek cairkan lalu dibentuk. Kubahnya berkilau, menaranya warna amber."

[Detik 18-28] Rock candy windows and pressed sugar walls with geometric patterns are assembled.

Dialog kakek: "Gula batu ini jadi jendela yang berkilauan. Dindingnya dicetak motif geometris. Subhanallah!"

[Detik 28-38] The completed sugar mosque sparkles brilliantly in sunlight.

Dialog kakek (bangga): "Alhamdulillah! Masjid gula yang berkilau bagai permata. Manisnya karya ini!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Sugar crystals tinkling, birds, morning sounds. Light festive music.`,
            nenek: `[Detik 0-5] Cinematic shot of sugar crystals glistening. A bright kampung setting.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing pink hijab and white kebaya sits with sugar varieties.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari gula. Berkilau cantik lho!"

[Detik 10-18] She creates pulled sugar domes, spun sugar minarets, crystal rock candy windows.

Dialog nenek (sambil membentuk): "Gula ini nenek tarik dan bentuk jadi kubah. Berkilau ya seperti kaca."

[Detik 18-28] Molded sugar walls with floral patterns and caramelized sugar base tiles.

Dialog nenek: "Dindingnya dicetak motif bunga. Cantik banget! MasyaAllah, gula bisa jadi seni."

[Detik 28-38] The dazzling sugar mosque sparkles.

Dialog nenek (bangga): "Alhamdulillah! Masjid gula nenek. Manis dan berkilauan."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Crystal sounds, birds, breeze. Light cheerful music.`
        },
        kerang: {
            kakek: `[Detik 0-5] Cinematic wide shot of a tropical beach with scattered seashells. Waves gently lapping. Cut to a coastal kampung.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing white peci and blue-striped shirt sits with baskets of shells.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari kerang laut. Berkilau dan indah!"

[Detik 10-18] He arranges conch shell domes, spiral shell minarets, cowrie shell walls.

Dialog kakek (sambil menyusun): "Kerang besar ini jadi kubah. Yang spiral buat menara. Cowrie ini disusun jadi dinding."

[Detik 18-28] Mother-of-pearl window inlays and coral archways. Sandy courtyard with starfish decorations.

Dialog kakek: "Mutiara ini jadi jendela. Lihat kilaunya! Subhanallah, laut menyimpan keindahan luar biasa."

[Detik 28-38] The completed shell mosque shimmers with iridescent beauty.

Dialog kakek (bangga): "Alhamdulillah! Masjid kerang kakek. Harta karun dari lautan."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Waves, seagulls, ocean breeze. Coastal ambient music.`,
            nenek: `[Detik 0-5] Cinematic close-up of pearlescent seashells on sand. Gentle waves.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing sea-blue hijab and white blouse sits near shore with shells.

Dialog nenek: "Assalamualaikum sayang... Nenek bikin masjid dari kerang laut. Cantik berkilau!"

[Detik 10-18] She arranges abalone shell domes, turret shell minarets, scallop shell walls.

Dialog nenek (sambil menyusun): "Kerang abalone ini berkilau cantik buat kubah. Yang kerucut jadi menara."

[Detik 18-28] Pearl decorations and crushed coral mosaic base take shape.

Dialog nenek: "Mutiara kecil ini nenek tempel jadi hiasan. MasyaAllah, indahnya anugerah laut."

[Detik 28-38] The completed shell mosque shimmers beautifully.

Dialog nenek (bangga): "Alhamdulillah! Masjid kerang nenek. Berkilau dari anugerah samudra."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Waves, seagulls, coastal breeze. Soft ocean music.`
        },
        biji: {
            kakek: `[Detik 0-5] Cinematic close-up of colorful seeds and grains — sesame, rice, corn, beans. Cut to a kampung yard.

[Detik 5-10] A 70-year-old Indonesian elderly man wearing cream peci and brown plaid shirt sits with jars of seeds.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari biji-bijian. Warna-warni alami dari alam!"

[Detik 10-18] He arranges sesame-covered domes, rice grain minarets, black seed geometric walls.

Dialog kakek (sambil menyusun): "Wijen ini kakek tempel di kubah. Beras buat menara. Habbatussauda jadi motif dinding."

[Detik 18-28] Corn kernel archways, red bean courtyard tiles, green mung bean landscaping added.

Dialog kakek: "Jagung jadi gerbang, kacang merah jadi lantai. MasyaAllah, biji-bijian ciptaan Allah penuh warna!"

[Detik 28-38] The completed seed mosque — warm earth tones, organic mosaic beauty.

Dialog kakek (bangga): "Alhamdulillah! Masjid biji-bijian. Alami, indah, penuh berkah."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Seeds pouring, birds, rooster, morning breeze. Gentle traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of bowls of colorful seeds and grains. Warm kampung morning.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing beige hijab and green batik sits with seed bowls.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari biji-bijian. Cantik alami!"

[Detik 10-18] She arranges golden flax seed domes, sunflower seed minarets, chia seed walls.

Dialog nenek (sambil menyusun): "Biji rami emas ini buat kubah. Biji bunga matahari jadi menara. Cantik ya."

[Detik 18-28] Lentil mosaic windows and pumpkin seed archways are carefully placed.

Dialog nenek: "Lentil ini jadi jendela mozaik. Biji labu jadi gerbang. Subhanallah, indah ya!"

[Detik 28-38] The completed seed mosque in natural earth tones.

Dialog nenek (bangga): "Alhamdulillah! Masjid biji-bijian nenek. Alami dan penuh warna."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Seeds sounds, birds, gentle breeze. Soft music.`
        },
        kain: {
            kakek: `[Detik 0-5] Cinematic close-up of colorful Indonesian batik and songket fabrics. Cut to a kampung veranda.

[Detik 5-10] A 66-year-old Indonesian elderly man wearing black peci and batik shirt sits with rolls of fabric.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari kain tradisional. Batik, songket, tenun — semua ada!"

[Detik 10-18] He drapes and shapes fabrics into mosque form — silk batik domes, velvet minarets.

Dialog kakek (sambil membentuk): "Batik sutra ini kakek bentuk jadi kubah. Beludru buat menara. Warnanya kaya sekali."

[Detik 18-28] Embroidered walls with Islamic calligraphy and songket accent panels with gold thread.

Dialog kakek: "Songket berbenang emas ini jadi panel dinding. MasyaAllah, kain Indonesia memang juara!"

[Detik 28-38] The completed fabric mosque — rich textiles, stunning cultural fusion.

Dialog kakek (bangga): "Alhamdulillah! Masjid kain nusantara. Budaya kita memang kaya dan indah."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Gamelan softly, fabric rustling, birds. Traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of beautiful Indonesian textiles — batik, tenun, songket. A warm kampung.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing burgundy hijab and gold-trimmed kebaya sits with fabrics.

Dialog nenek: "Assalamualaikum sayang! Nenek bikin masjid dari kain tradisional Indonesia. Cantik!"

[Detik 10-18] She shapes batik tulis-covered domes, brocade minarets, embroidered walls.

Dialog nenek (sambil membentuk): "Batik tulis ini nenek balutkan di kubah. Brokat buat menara. Tenun ikat jadi dinding."

[Detik 18-28] Songket panels with gold metallic thread added as base and accents.

Dialog nenek: "Songket emas ini jadi alas. MasyaAllah, kain Indonesia penuh keindahan dan makna."

[Detik 28-38] The completed fabric mosque glows with rich textile colors.

Dialog nenek (bangga): "Alhamdulillah! Masjid kain nenek. Warisan budaya yang indah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Fabric sounds, birds, loom weaving. Soft traditional music.`
        },
        logam: {
            kakek: `[Detik 0-5] Cinematic close-up of sparking metal being hammered on an anvil. Cut to a kampung metalwork workshop.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing white peci and dark gray shirt sits in his workshop with metal tools.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari logam. Kuningan, tembaga, besi — semua jadi satu!"

[Detik 10-18] He assembles polished brass domes, copper minarets with patina accents, wrought iron lattice windows.

Dialog kakek (sambil merakit): "Kuningan ini kakek poles jadi kubah berkilau. Tembaga buat menara. Besi tempa buat jendela jali."

[Detik 18-28] Hammered aluminum walls with embossed Islamic patterns and a brushed steel base.

Dialog kakek: "Dinding dari aluminium ditempa motif islami. MasyaAllah, logam bisa jadi karya yang sangat indah!"

[Detik 28-38] The completed metal mosque reflects warm light beautifully.

Dialog kakek (bangga): "Alhamdulillah! Masjid logam kakek. Kokoh, berkilau, dan penuh seni."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Metal hammering, anvil sounds, birds, traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of gleaming metal surfaces reflecting light. A kampung workshop.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing silver-gray hijab and dark blue batik presents metal pieces.

Dialog nenek: "Assalamualaikum... Nenek bikin masjid dari logam. Berkilau indah!"

[Detik 10-18] She assembles copper domes, silver filigree minarets, brass-engraved walls.

Dialog nenek (sambil merakit): "Tembaga ini jadi kubah. Perak filigri buat menara. Kuningan diukir jadi dinding."

[Detik 18-28] Bronze archways and pewter base with etched geometric designs.

Dialog nenek: "Perunggu jadi gerbang. MasyaAllah, paduan logam ini cantik sekali ya."

[Detik 28-38] The completed metal mosque gleams beautifully.

Dialog nenek (bangga): "Alhamdulillah! Masjid logam nenek. Berkilau dan kokoh."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Gentle metal sounds, birds, breeze. Soft music.`
        },
        kristal: {
            kakek: `[Detik 0-5] Cinematic close-up of amethyst crystals refracting rainbow light. Dramatic sparkling. Cut to a kampung setting.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing white peci and light purple batik sits with a collection of crystals.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari kristal dan batu permata. Berkilau luar biasa!"

[Detik 10-18] He arranges amethyst cluster domes, clear quartz point minarets, rose quartz walls.

Dialog kakek (sambil menyusun): "Amethyst ini jadi kubah. Kuarsa bening buat menara. Rose quartz jadi dinding. Indah ya!"

[Detik 18-28] Citrine window inlays and jade archway accents. Polished agate base arranged in fractal patterns.

Dialog kakek: "Citrine jadi jendela, giok jadi gerbang. MasyaAllah, ciptaan Allah memang penuh keajaiban!"

[Detik 28-38] The completed crystal mosque refracts light creating rainbow prisms.

Dialog kakek (bangga): "Alhamdulillah! Masjid kristal yang memukau. Seperti harta karun dari perut bumi."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Crystal chiming, mystical ambient sounds, birds. Ethereal music.`,
            nenek: `[Detik 0-5] Cinematic shot of selenite crystals glowing with inner light. Mystical atmosphere.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing lavender hijab and white silk blouse sits with crystals.

Dialog nenek: "Assalamualaikum sayang... Nenek bikin masjid dari kristal. Berkilau seperti surga!"

[Detik 10-18] She arranges amethyst geode domes, selenite minarets, clear quartz walls.

Dialog nenek (sambil menyusun): "Ametis ini kubahnya. Selenite buat menara, bersinar dari dalam. Cantik sekali."

[Detik 18-28] Fluorite window accents and polished obsidian base reflecting the mosque like a mirror.

Dialog nenek: "Obsidian hitam ini jadi cermin di alasnya. Subhanallah, kristal itu keajaiban alam!"

[Detik 28-38] The completed crystal mosque glows ethereally.

Dialog nenek (bangga): "Alhamdulillah! Masjid kristal nenek. Bersinar bagai permata."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Crystal tones, gentle wind, mystical ambiance. Ethereal music.`
        },
        sabun: {
            kakek: `[Detik 0-5] Cinematic close-up of colorful artisan soap bars in pastel colors. Cut to a clean kampung veranda.

[Detik 5-10] A 65-year-old Indonesian elderly man wearing brown peci and cream koko shirt sits with soap bars and carving tools.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari sabun. Wangi, lembut, dan pastinya cantik!"

[Detik 10-18] He carves and molds soap into mosque shapes — pastel soap domes, carved soap minarets.

Dialog kakek (sambil memahat): "Sabun lavender ini jadi kubah. Yang hijau mint buat menara. Dipahat pelan-pelan, harum ya."

[Detik 18-28] Soap walls with stamped floral patterns and layered soap slices in gradient colors.

Dialog kakek: "Dindingnya kakek cap motif bunga. Lapis-lapis warnanya cantik. MasyaAllah!"

[Detik 28-38] The completed soap mosque — smooth, clean, satisfying aesthetic.

Dialog kakek (bangga): "Alhamdulillah! Masjid sabun yang wangi. Bersih, indah, dan menyejukkan."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Soft music, birds singing, gentle breeze, clean atmosphere.`,
            nenek: `[Detik 0-5] Cinematic shot of marbled artisan soap bars. Soft pastel colors. A bright kampung.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing soft pink hijab and white cotton blouse sits with soap collection.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari sabun. Wangi sekali dan cantik!"

[Detik 10-18] She sculpts swirled pastel soap domes, carved white soap minarets, layered soap walls.

Dialog nenek (sambil membentuk): "Sabun ini nenek ukir jadi kubah. Warna-warni marmer. Harum lavender!"

[Detik 18-28] Embedded dried flower soap windows and honey-glycerin soap base.

Dialog nenek: "Bunga kering ini nenek tempel di jendela. Sabun madu ini jadi alas. Subhanallah, cantik!"

[Detik 28-38] The completed soap mosque in beautiful pastel tones.

Dialog nenek (bangga): "Alhamdulillah! Masjid sabun nenek. Lembut, wangi, dan indah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Soft sounds, birds, gentle atmosphere. Light music.`
        },
        daur_ulang: {
            kakek: `[Detik 0-5] Cinematic shot of sorted recyclable materials — bottles, cans, caps. Cut to a kampung yard.

[Detik 5-10] A 70-year-old Indonesian elderly man wearing green peci and earth-toned batik sits with recycled materials.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari barang daur ulang. Sampah bisa jadi karya seni!"

[Detik 10-18] He shapes plastic bottle domes, aluminum can minarets, bottle cap mosaic walls.

Dialog kakek (sambil merakit): "Botol plastik ini kakek bentuk jadi kubah. Kaleng jadi menara. Tutup botol disusun jadi dinding."

[Detik 18-28] Cardboard structural elements and flattened tin can base arranged artfully.

Dialog kakek: "Kardus jadi rangka, kaleng pipih jadi alas. MasyaAllah, daur ulang itu berkah buat bumi!"

[Detik 28-38] The completed recycled mosque — colorful, creative, extraordinary craftsmanship.

Dialog kakek (bangga): "Alhamdulillah! Masjid daur ulang. Dari sampah jadi karya indah. Jaga bumi kita!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Recyclables clinking, birds, morning sounds. Uplifting music.`,
            nenek: `[Detik 0-5] Cinematic shot of colorful bottle caps and recyclables sorted neatly. A bright kampung.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing green hijab and batik blouse with recycled materials.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari barang bekas. Kreatif dan ramah lingkungan!"

[Detik 10-18] She arranges bottle cap dome mosaics, newspaper-rolled minarets, CD reflective windows.

Dialog nenek (sambil merakit): "Tutup botol ini nenek susun jadi kubah mozaik. Koran digulung jadi menara. CD jadi jendela."

[Detik 18-28] Egg carton textured walls and woven plastic bag strip base.

Dialog nenek: "Karton telur jadi dinding bertekstur. Kantong plastik dianyam jadi alas. Subhanallah, kreasi!"

[Detik 28-38] The colorful upcycled mosque is revealed.

Dialog nenek (bangga): "Alhamdulillah! Masjid daur ulang nenek. Bukti sampah bisa jadi indah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Recycling sounds, birds, cheerful atmosphere. Upbeat music.`
        },
        kulit: {
            kakek: `[Detik 0-5] Cinematic close-up of rich leather hides and tooling stamps. Cut to a kampung leather workshop.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing dark brown peci and tan leather vest sits with leather tools.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari kulit. Kulit sapi ini kuat dan indah seratnya!"

[Detik 10-18] He tools and shapes leather — embossed leather domes, stitched leather minarets, pyrography walls.

Dialog kakek (sambil mengerjakan): "Kubahnya diembos motif arabesque. Menaranya dijahit rapi. Dindingnya kakek bakar motif batik."

[Detik 18-28] Rawhide lattice windows and suede base with leather-stamped geometric patterns.

Dialog kakek: "Kulit mentah jadi jendela jali. Suede jadi alas. MasyaAllah, kulit itu bahan yang luar biasa!"

[Detik 28-38] The completed leather mosque — warm, luxurious brown tones.

Dialog kakek (bangga): "Alhamdulillah! Masjid kulit yang mewah. Seni kulit Indonesia memang juara!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Leather tooling sounds, birds, workshop ambiance. Traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of dyed leather pieces in shades of tan and brown. A kampung workshop.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing caramel hijab and dark brown batik sits with leather craft tools.

Dialog nenek: "Assalamualaikum... Nenek bikin masjid dari kulit. Warnanya hangat dan indah!"

[Detik 10-18] She crafts soft leather domes with hand-tooled floral patterns, saddle-stitched minarets.

Dialog nenek (sambil mengerjakan): "Kubahnya nenek ukir motif bunga. Menaranya dijahit pelana. Cantik cokelat keemasan."

[Detik 18-28] Embossed leather walls and pyrography Islamic geometric base.

Dialog nenek: "Dindingnya diembos. Alasnya nenek bakar motif geometris. Subhanallah, cantik!"

[Detik 28-38] The completed leather mosque in warm rich tones.

Dialog nenek (bangga): "Alhamdulillah! Masjid kulit nenek. Hangat dan penuh seni."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Leather sounds, birds, gentle breeze. Soft music.`
        },
        beton: {
            kakek: `[Detik 0-5] Cinematic shot of concrete being poured into a mold, smooth gray texture. Cut to a kampung workshop.

[Detik 5-10] A 69-year-old Indonesian elderly man wearing white peci and gray work shirt sits at a workbench with cement tools.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari beton. Kokoh, modern, dan keren!"

[Detik 10-18] He casts concrete domes, shapes reinforced concrete minarets, presses geometric patterns into wet walls.

Dialog kakek (sambil membuat): "Beton ini kakek cetak jadi kubah. Menaranya diperkuat besi. Dindingnya dicetak selagi basah."

[Detik 18-28] Glass-embedded concrete windows and polished concrete base take shape.

Dialog kakek: "Kaca ini ditanam di beton jadi jendela yang berkilau. MasyaAllah, beton pun bisa cantik!"

[Detik 28-38] The completed concrete mosque — industrial yet elegant.

Dialog kakek (bangga): "Alhamdulillah! Masjid beton kakek. Kokoh dan modern, tahan lama."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Concrete mixing, construction sounds, birds. Ambient modern music.`,
            nenek: `[Detik 0-5] Cinematic shot of smooth concrete surfaces and terrazzo patterns. A bright kampung.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing light gray hijab and white blouse sits with concrete molds.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari beton. Modern dan cantik!"

[Detik 10-18] She pours and shapes concrete domes, minimalist minarets, textured walls.

Dialog nenek (sambil membuat): "Beton ini nenek cetak dan haluskan. Kubahnya bulat sempurna. Menaranya ramping."

[Detik 18-28] Polished terrazzo base with colorful stone chips. Small succulents placed around the courtyard.

Dialog nenek: "Alas teraso ini berkilau. Tanaman kecil jadi taman. Subhanallah, beton bisa elegan!"

[Detik 28-38] The completed concrete mosque — modern, clean, beautiful.

Dialog nenek (bangga): "Alhamdulillah! Masjid beton nenek. Modern tapi tetap indah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Smooth sounds, birds, breeze. Modern ambient music.`
        },
        keramik: {
            kakek: `[Detik 0-5] Cinematic close-up of glossy blue-white ceramic tiles with Islamic patterns. Cut to a pottery workshop.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing blue peci and white koko shirt sits in a ceramic workshop.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari keramik. Berglasur indah dan berkilau!"

[Detik 10-18] He assembles cobalt blue ceramic domes, ivory ceramic minarets with hand-painted motifs.

Dialog kakek (sambil merakit): "Kubah keramik biru ini berkilau cantik. Menaranya ivory putih dengan lukisan bunga."

[Detik 18-28] Celadon green glazed walls and gold-lustre accent tiles in Islamic geometric patterns.

Dialog kakek: "Glasur hijau celadon untuk dinding. Ubin emas jadi aksesnya. MasyaAllah, keramik itu seni tinggi!"

[Detik 28-38] The completed ceramic mosque — glossy, colorful, sophisticated.

Dialog kakek (bangga): "Alhamdulillah! Masjid keramik kakek. Berkilau bagai mutiara."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Ceramic clinking, kiln sounds, birds. Traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of blue-and-white hand-painted ceramic pieces. A pottery studio.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing cobalt blue hijab and white batik in a ceramic workshop.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari keramik. Berkilau cantik seperti porselen!"

[Detik 10-18] She assembles delft blue-and-white domes, hand-painted ceramic minarets with floral vines.

Dialog nenek (sambil merakit): "Kubah biru putih ini klasik. Menaranya dilukis motif sulur bunga. Cantik ya."

[Detik 18-28] Glazed terracotta walls and mosaic ceramic base in Indonesian patterns.

Dialog nenek: "Ubin mozaik ini disusun motif tradisional. Subhanallah, keramik memang indah!"

[Detik 28-38] The completed ceramic mosque — elegant blue-white tones.

Dialog nenek (bangga): "Alhamdulillah! Masjid keramik nenek. Klasik dan elegan."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Ceramic sounds, gentle atmosphere, birds. Soft classical music.`
        },
        semen: {
            kakek: `[Detik 0-5] Cinematic shot of cement being mixed with a trowel. Gray paste swirling. Cut to a kampung yard.

[Detik 5-10] A 70-year-old Indonesian elderly man wearing gray peci and brown work shirt sits with bags of cement.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari semen. Bahan bangunan yang bisa jadi seni!"

[Detik 10-18] He plasters and shapes cement domes, sculpts tapered cement minarets.

Dialog kakek (sambil membuat): "Semen ini kakek aduk lalu cetak jadi kubah. Menaranya dibentuk lancip ke atas. Rapi ya."

[Detik 18-28] Cement walls with hand-carved patterns and pebble mosaic base.

Dialog kakek: "Selagi basah, kakek ukir motif di dinding. Kerikil ini jadi mozaik di alas. MasyaAllah!"

[Detik 28-38] The completed cement mosque — solid, detailed, surprisingly artistic.

Dialog kakek (bangga): "Alhamdulillah! Masjid semen kakek. Dari bahan bangunan jadi karya seni."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Cement mixing, trowel sounds, birds. Gentle music.`,
            nenek: `[Detik 0-5] Cinematic shot of smooth white cement surface. Clean textures. A kampung yard.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing cream hijab and gray-blue batik sits with cement tools.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari semen. Polos tapi cantik lho!"

[Detik 10-18] She plasters cement domes painted white, sculpts cement minarets.

Dialog nenek (sambil membuat): "Semennya nenek haluskan jadi kubah. Dicat putih bersih. Menaranya ramping."

[Detik 18-28] Cement walls with pressed leaf pattern impressions. Green and gold paint accents added.

Dialog nenek: "Daun ini nenek cap di dinding selagi basah. Bulan sabit dicat emas. Subhanallah!"

[Detik 28-38] The completed cement mosque with white paint and gold accents.

Dialog nenek (bangga): "Alhamdulillah! Masjid semen nenek. Sederhana tapi elegan."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Cement sounds, birds, gentle breeze. Soft music.`
        },
        rotan: {
            kakek: `[Detik 0-5] Cinematic shot of coiled rattan in honey-brown tones. Cut to a traditional rattan workshop in a kampung.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing white peci and olive green batik sits with rattan coils.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari rotan. Lentur, kuat, dan indah dianyam!"

[Detik 10-18] He weaves rattan into mosque form — intricately woven domes, rattan-wrapped minarets.

Dialog kakek (sambil menganyam): "Rotan ini kakek anyam jadi kubah motif herringbone. Menaranya dililitkan rotan halus."

[Detik 18-28] Rattan wickerwork walls and lattice windows. Coiled rattan base.

Dialog kakek: "Dinding anyaman rotan ini kokoh dan cantik. MasyaAllah, kerajinan rotan Indonesia memang juara!"

[Detik 28-38] The completed rattan mosque — warm honey-brown tones, elegant.

Dialog kakek (bangga): "Alhamdulillah! Masjid rotan kakek. Anyaman nusantara yang memukau."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Rattan weaving sounds, birds, gentle breeze. Traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of golden-brown rattan coils and weaving tools. A warm kampung.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing honey-brown hijab and cream batik with rattan coils.

Dialog nenek: "Assalamualaikum sayang! Nenek bikin masjid dari rotan. Cantik alami!"

[Detik 10-18] She weaves rattan-wrapped domes, spiraling rattan minarets, open-weave rattan walls.

Dialog nenek (sambil menganyam): "Rotan ini nenek anyam rapi jadi kubah. Menaranya dipilin spiral. Cantik ya."

[Detik 18-28] Tightly coiled rattan base with concentric ring patterns.

Dialog nenek: "Alasnya nenek gulung berlapis-lapis. Subhanallah, rotan Indonesia memang indah!"

[Detik 28-38] The completed rattan mosque — warm golden sheen.

Dialog nenek (bangga): "Alhamdulillah! Masjid rotan nenek. Anyaman yang elegan."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Rattan weaving, birds, breeze. Soft music.`
        },
        janur: {
            kakek: `[Detik 0-5] Cinematic shot of fresh green and golden coconut leaves (janur) swaying. Cut to a kampung yard.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing white peci and light green batik sits with stacks of janur.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari janur kelapa. Tradisi Jawa yang indah!"

[Detik 10-18] He folds and weaves janur into a miniature mosque — folded janur domes, janur-wrapped minarets.

Dialog kakek (sambil menganyam): "Janur ini kakek lipat jadi kubah tradisional. Menaranya dililit janur. Hijau segar ya."

[Detik 18-28] Woven janur lattice walls and braided coconut leaf geometric base patterns.

Dialog kakek: "Dinding anyaman janur motif belah ketupat. Alasnya dianyam geometris. MasyaAllah, cantik!"

[Detik 28-38] The completed janur mosque — vibrant green and golden yellow.

Dialog kakek (bangga): "Alhamdulillah! Masjid janur kakek. Tradisi nusantara yang harus dilestarikan."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Coconut leaves rustling, birds, morning breeze. Gamelan music.`,
            nenek: `[Detik 0-5] Cinematic shot of fresh coconut leaves in green and gold. A bright kampung morning.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing pale green hijab and white batik kebaya with janur leaves.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari janur. Seni tradisional yang cantik!"

[Detik 10-18] She folds janur domes, spirals janur ribbon minarets, weaves janur screen walls.

Dialog nenek (sambil menganyam): "Janur ini nenek lipat jadi kubah. Pita janur jadi menara. Dinding dianyam rapi."

[Detik 18-28] Janur flower decorations and braided golden coconut leaf base.

Dialog nenek: "Bunga janur ini nenek taruh di setiap sudut. Subhanallah, janur itu serbaguna!"

[Detik 28-38] The completed janur mosque — green to golden color transition.

Dialog nenek (bangga): "Alhamdulillah! Masjid janur nenek. Segar, alami, dan indah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Leaves rustling, birds, coconut palms swaying. Soft gamelan music.`
        },
        emas: {
            kakek: `[Detik 0-5] Cinematic close-up of gleaming gold ingots and gold dust sparkling intensely. Cut to a sunlit kampung setting bathed in golden light.

[Detik 5-10] A 66-year-old Indonesian elderly man wearing a white peci and deep burgundy batik sits at a velvet-draped table with gold materials.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari emas murni. Berkilau luar biasa, mewah sekali!"

[Detik 10-18] He carefully shapes and hammers gold into mosque components — mirror-polished gold domes, filigree minarets with swirling arabesque patterns.

Dialog kakek (sambil membentuk): "Emas ini kakek tempa jadi kubah. Lihat kilaunya, seperti matahari! Menaranya dari filigri emas, detail sekali."

[Detik 18-28] Gold leaf walls with embossed Islamic calligraphy and ruby-red gemstone inlays are assembled. The gold surfaces create dazzling warm reflections.

Dialog kakek: "Dindingnya diukir kaligrafi Islam. Jendela pakai batu rubi merah. MasyaAllah, emas ciptaan Allah memang mulia!"

[Detik 28-38] The completed gold mosque radiates intense golden light. Every surface gleams brilliantly.

Dialog kakek (bangga): "Alhamdulillah! Masjid emas kakek. Mewah, berkilau, dan penuh kemuliaan."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Gold hammering sounds, birds, warm atmosphere. Majestic traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of gold jewelry pieces sparkling under warm light. A radiant kampung setting.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing a deep gold hijab and ivory kebaya sits with gold crafting materials.

Dialog nenek: "Assalamualaikum sayang... Nenek bikin masjid dari emas. Berkilau cantik seperti matahari!"

[Detik 10-18] She carefully assembles polished gold domes, slender gold minarets topped with tiny diamond crescents.

Dialog nenek (sambil merakit): "Kubah emasnya berkilau hangat. Menaranya ramping dengan bulan sabit berlian. Cantik sekali."

[Detik 18-28] Hand-engraved gold walls with geometric tessellations and gold tile base in a star pattern.

Dialog nenek: "Dindingnya nenek ukir motif geometris Islam. Alasnya ubin emas pola bintang. Subhanallah!"

[Detik 28-38] The completed gold mosque glows with warm golden radiance.

Dialog nenek (bangga): "Alhamdulillah! Masjid emas nenek. Mewah dan bersinar indah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Gentle gold sounds, birds, warm light. Majestic soft music.`
        },
        perak: {
            kakek: `[Detik 0-5] Cinematic close-up of polished silver surfaces reflecting cool blue-white light. Cut to a silversmith kampung workshop.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing a black peci and midnight-blue batik sits in his silver workshop.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari perak murni. Berkilau bagai cahaya bulan!"

[Detik 10-18] He twists silver wire into filigree minarets and hammers silver domes with embossed crescent patterns.

Dialog kakek (sambil membentuk): "Perak ini kakek tempa jadi kubah. Kawat perak dipilin jadi menara filigri. Detail sekali seperti renda."

[Detik 18-28] Silver mesh lattice windows and brushed silver base with etched mandala patterns assembled.

Dialog kakek: "Jendela jali dari jaring perak. Alasnya diukir motif mandala. MasyaAllah, perak itu indah dan mulia!"

[Detik 28-38] The completed silver mosque shimmers with cool ethereal moonlit glow.

Dialog kakek (bangga): "Alhamdulillah! Masjid perak kakek. Bercahaya seperti sinar rembulan."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Silver tapping, gentle hammering, birds. Cool ambient traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of gleaming silver filigree jewelry. Cool blue-toned kampung workshop.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a silver-white hijab and navy velvet kebaya sits with silver tools.

Dialog nenek: "Assalamualaikum... Nenek bikin masjid dari perak. Berkilau dingin seperti bintang!"

[Detik 10-18] She assembles silver domes with floral motifs and silver filigree minarets with tiny bells.

Dialog nenek (sambil merakit): "Kubahnya diukir motif bunga. Menaranya filigri perak dengan lonceng kecil. Cantik ya."

[Detik 18-28] Engraved silver walls with arabesque scrollwork and mirror-polished silver base.

Dialog nenek: "Dindingnya ukiran arabesque. Alasnya seperti cermin berkilau. Subhanallah!"

[Detik 28-38] The completed silver mosque gleams with luminous cool-blue sheen.

Dialog nenek (bangga): "Alhamdulillah! Masjid perak nenek. Elegan dan bercahaya."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Silver chiming, cool breeze, birds. Elegant soft music.`
        },
        mutiara: {
            kakek: `[Detik 0-5] Cinematic close-up of lustrous pearls on black velvet, iridescent light dancing. A warm kampung setting.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing a white peci and cream-white koko sits at a velvet-covered table with pearls.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari mutiara. Berkilau pelangi, indah luar biasa!"

[Detik 10-18] He carefully places pearl domes glowing with pink and blue overtones, graduated pearl minarets.

Dialog kakek (sambil menyusun): "Mutiara South Sea ini jadi kubah. Berkilau pink dan biru. Menaranya dari mutiara kecil sampai besar."

[Detik 18-28] Mother-of-pearl window panels reflecting rainbow iridescence and abalone shell base in vivid greens and purples.

Dialog kakek: "Jendela dari induk mutiara, berkilau pelangi. Alas abalone warnanya hijau dan ungu. MasyaAllah!"

[Detik 28-38] The completed pearl mosque shimmers with dreamy pearlescent luminescence.

Dialog kakek (bangga): "Alhamdulillah! Masjid mutiara kakek. Bersinar seperti permata dari lautan."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Gentle oceanic sounds, pearls clicking, birds. Ethereal ambient music.`,
            nenek: `[Detik 0-5] Cinematic shot of iridescent pearls in pink and gold tones on dark silk. Warm kampung light.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing a pearl-white hijab and dusty-rose kebaya sits with pearl collections.

Dialog nenek: "Assalamualaikum sayang... Nenek bikin masjid dari mutiara. Cantik berkilau pelangi!"

[Detik 10-18] She places Akoya pearl domes with pink lustre and Tahitian black pearl minarets with green overtones.

Dialog nenek (sambil menyusun): "Mutiara Akoya ini kubahnya, pink berkilau. Mutiara hitam Tahiti jadi menara. Cantik sekali."

[Detik 18-28] Golden South Sea pearl archways and mother-of-pearl base in swirling turquoise and gold patterns.

Dialog nenek: "Gerbangnya mutiara emas. Alasnya induk mutiara warna toska dan emas. Subhanallah, indah!"

[Detik 28-38] The completed pearl mosque glows ethereally with iridescent beauty.

Dialog nenek (bangga): "Alhamdulillah! Masjid mutiara nenek. Bersinar bagai harta karun samudra."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Ocean whispers, pearls, gentle breeze. Dreamy ambient music.`
        },
        bunga: {
            kakek: `[Detik 0-5] Cinematic close-up of vibrant tropical flowers — blazing red roses, golden sunflowers, purple orchids. Cut to a lush kampung garden.

[Detik 5-10] A 65-year-old Indonesian elderly man wearing a white peci and vivid emerald-green batik sits in a flower-filled garden.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari bunga segar. Warna-warni, harum, cantik luar biasa!"

[Detik 10-18] He carefully arranges crimson rose petal domes, golden sunflower minarets, and orchid-blossom walls.

Dialog kakek (sambil menyusun): "Kelopak mawar merah ini jadi kubah. Bunga matahari kuning emas jadi menara. Anggrek ungu buat dinding."

[Detik 18-28] White jasmine archways, orange marigold borders, and deep green leaf base with frangipani scattered. Butterflies dance around.

Dialog kakek: "Melati putih harum jadi gerbang. Kupu-kupu pun datang! MasyaAllah, bunga ciptaan Allah memang indah!"

[Detik 28-38] The completed flower mosque bursts with vivid saturated colors against the lush green garden.

Dialog kakek (bangga): "Alhamdulillah! Masjid bunga kakek. Segar, harum, dan penuh warna kehidupan."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Bees buzzing, birds singing, butterflies, flower garden ambiance. Cheerful traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of baskets overflowing with vivid tropical blooms in magenta, coral, and turquoise. A lush kampung garden.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing a vibrant magenta hijab and floral kebaya sits surrounded by fresh flowers.

Dialog nenek: "Assalamualaikum anak-anak! Nenek bikin masjid dari bunga. Harum dan cantik!"

[Detik 10-18] She arranges violet hydrangea domes, yellow chrysanthemum minarets, scarlet hibiscus walls.

Dialog nenek (sambil menyusun): "Hydrangea ungu ini jadi kubah. Krisan kuning cerah jadi menara. Kembang sepatu merah buat dinding."

[Detik 18-28] White lily window accents and pink carnation archways with bird-of-paradise flowers. Hummingbirds hover.

Dialog nenek: "Lili putih jadi jendela. Burung kolibri pun tertarik datang! Subhanallah, alam ini penuh keajaiban."

[Detik 28-38] The completed flower mosque in vivid full bloom. Colors are intensely saturated.

Dialog nenek (bangga): "Alhamdulillah! Masjid bunga nenek. Segar, harum, memukau!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Garden sounds, butterflies, birds, gentle breeze. Soft cheerful music.`
        },
        permen: {
            kakek: `[Detik 0-5] Cinematic close-up of colorful candies — neon pink lollipops, rainbow gummy bears, striped candy canes. A cheerful kampung setting.

[Detik 5-10] A 66-year-old Indonesian elderly man wearing a brown peci and bright yellow koko sits with overflowing candy jars.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari permen. Warna-warni neon, seru sekali!"

[Detik 10-18] He assembles swirled lollipop domes in electric pink and blue, candy cane minarets in red-and-white stripes.

Dialog kakek (sambil menyusun): "Lollipop ini jadi kubah, warnanya pink neon. Candy cane jadi menara garis merah putih. Lucu kan?"

[Detik 18-28] Rainbow gummy bear walls in mosaic patterns, jelly bean tiles, and glittering rock candy crystal base.

Dialog kakek: "Gummy bear warna-warni jadi dinding mozaik. Permen batu berkilau jadi alas. MasyaAllah, manis dan cantik!"

[Detik 28-38] The completed candy mosque explodes with saturated neon colors.

Dialog kakek (bangga): "Alhamdulillah! Masjid permen yang manis dan penuh warna. Dari permen jadi karya seni!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Candy wrapper sounds, cheerful atmosphere, birds. Playful upbeat music.`,
            nenek: `[Detik 0-5] Cinematic shot of jars filled with vibrant pastel and neon candies. A bright cheerful kampung.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a candy-pink hijab and white blouse sits with candy collections.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari permen. Lucu dan warna-warni!"

[Detik 10-18] She arranges pastel marshmallow domes in baby pink and sky blue, twisted licorice minarets.

Dialog nenek (sambil menyusun): "Marshmallow ini jadi kubah pink dan biru. Licorice hitam jadi menara. Lucu ya!"

[Detik 18-28] M&M-style chocolate walls in pixel-art Islamic patterns and fruit candy stained-glass windows.

Dialog nenek: "Cokelat warna-warni jadi dinding motif Islam. Permen buah jadi jendela kaca patri. Subhanallah, kreatif!"

[Detik 28-38] The completed candy mosque in vivid playful colors.

Dialog nenek (bangga): "Alhamdulillah! Masjid permen nenek. Manis, ceria, dan penuh imajinasi."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Candy sounds, cheerful birds, playful atmosphere. Fun upbeat music.`
        },
        koral: {
            kakek: `[Detik 0-5] Cinematic underwater-style shot of vivid neon coral reefs — electric orange staghorn, hot pink soft coral. Cut to a coastal kampung.

[Detik 5-10] A 69-year-old Indonesian elderly man wearing a white peci and deep ocean-blue batik sits near turquoise waters.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari koral. Warnanya neon cerah seperti terumbu karang!"

[Detik 10-18] He carefully arranges vivid staghorn coral domes in electric orange and pink, pillar coral minarets in crimson.

Dialog kakek (sambil menyusun): "Koral staghorn jingga neon ini jadi kubah. Koral pilar merah tua jadi menara. Warnanya luar biasa cerah!"

[Detik 18-28] Brain coral walls in fluorescent yellow-green and fan coral windows in brilliant scarlet with sea glass base.

Dialog kakek: "Koral otak kuning-hijau neon jadi dinding. Kaca laut biru dan hijau jadi alas. MasyaAllah, laut itu penuh keindahan!"

[Detik 28-38] The completed coral mosque vibrates with intensely saturated neon colors.

Dialog kakek (bangga): "Alhamdulillah! Masjid koral kakek. Berwarna neon cerah seperti terumbu karang hidup."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Ocean waves, tropical birds, water splashing. Gentle coastal music.`,
            nenek: `[Detik 0-5] Cinematic shot of vivid electric pink and magenta soft corals. A beautiful coastal kampung.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing a vivid turquoise hijab and white blouse sits by the coast.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari koral. Cantik dan berwarna cerah!"

[Detik 10-18] She arranges soft coral domes in brilliant pink and magenta, sea fan minarets in blood-orange.

Dialog nenek (sambil menyusun): "Koral lunak pink cerah ini jadi kubah. Kipas laut jingga tua jadi menara. Indah ya!"

[Detik 18-28] Mushroom coral walls in fluorescent green and table coral archways in cobalt blue.

Dialog nenek: "Koral jamur hijau neon jadi dinding. Gerbangnya koral biru kobalt. Subhanallah, laut indah sekali!"

[Detik 28-38] The completed coral mosque glows with vivid tropical reef colors.

Dialog nenek (bangga): "Alhamdulillah! Masjid koral nenek. Cantik berwarna-warni seperti dasar laut."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Ocean waves, sea breeze, birds. Gentle tropical music.`
        },
        lumut: {
            kakek: `[Detik 0-5] Cinematic shot of ancient moss-covered stones with dewdrops glistening. A misty highland kampung.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing a black peci and deep forest-green batik sits on a mossy stone.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari lumut dan pakis hidup. Segar, hijau, dan alami!"

[Detik 10-18] He arranges thick emerald cushion moss domes with dewdrops and maidenhair fern minarets.

Dialog kakek (sambil menyusun): "Lumut bantal hijau zamrud ini jadi kubah. Ada embun seperti berlian! Pakis suplir jadi menara."

[Detik 18-28] Sheet moss walls in lime to forest green gradient with tiny white mushrooms and orange fungi.

Dialog kakek: "Dindingnya lumut gradasi hijau muda sampai tua. Ada jamur kecil oranye. MasyaAllah, hutan itu ajaib!"

[Detik 28-38] The completed moss mosque in ethereal misty forest light with morning mist swirling.

Dialog kakek (bangga): "Alhamdulillah! Masjid lumut yang hidup dan bernapas. Segar seperti hutan di pagi hari."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Forest sounds, dripping dew, birds chirping, rustling leaves. Mystical ambient music.`,
            nenek: `[Detik 0-5] Cinematic shot of enchanted mossy forest clearing with ferns and wildflowers. Highland kampung.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a sage-green hijab and brown batik sits in a mossy clearing.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari lumut dan pakis. Seperti dari dunia dongeng!"

[Detik 10-18] She places velvety sphagnum moss domes in chartreuse and sword fern minarets.

Dialog nenek (sambil menyusun): "Lumut sphagnum hijau terang ini jadi kubah. Pakis pedang jadi menara tinggi. Cantik ya!"

[Detik 18-28] Different moss species walls creating tapestry of greens with tiny red toadstools and violet wildflowers.

Dialog nenek: "Dindingnya bermacam lumut hijau. Ada jamur merah kecil dan bunga ungu. Subhanallah, alam ini ajaib!"

[Detik 28-38] The completed moss mosque with dewdrops sparkling like jewels.

Dialog nenek (bangga): "Alhamdulillah! Masjid lumut nenek. Hidup, segar, dan penuh keajaiban alam."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Forest ambient, dewdrops, birds, gentle wind. Enchanting soft music.`
        },
        stik_eskrim: {
            kakek: `[Detik 0-5] Cinematic close-up of colorful popsicle sticks sorted by vivid colors — cherry-red, royal blue, sunflower-yellow. A bright kampung.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing a white peci and sky-blue batik sits with bundles of sticks.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari stik es krim. Warna-warni cerah, kreatif!"

[Detik 10-18] He carefully layers stick domes stained in vivid cherry-red and royal blue, paints geometric minarets.

Dialog kakek (sambil menyusun): "Stik merah dan biru jadi kubah. Menara dicat kuning dan hijau bergaris. Rapi sekali!"

[Detik 18-28] Interlocking stick walls with cutout patterns painted in hot pink and turquoise, rainbow gradient base.

Dialog kakek: "Dindingnya motif geometris pink dan toska. Alas gradasi pelangi dari ungu sampai merah. MasyaAllah!"

[Detik 28-38] The completed popsicle stick mosque in vivid rainbow colors.

Dialog kakek (bangga): "Alhamdulillah! Masjid stik es krim. Warna-warni pelangi, karya seni dari bahan sederhana!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Wood stacking, birds, cheerful atmosphere. Bright upbeat craft music.`,
            nenek: `[Detik 0-5] Cinematic shot of sorted colorful popsicle sticks in rainbow arrangement. A warm cheerful kampung.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing a coral-pink hijab and cream blouse sits at a craft table.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari stik es krim. Cantik dan penuh warna!"

[Detik 10-18] She paints and layers stick domes in pastel lavender and mint green with floral details.

Dialog nenek (sambil mencat): "Kubahnya pastel ungu dan hijau mint. Nenek lukis motif bunga kecil. Manis ya!"

[Detik 18-28] Woven stick walls in lemon-yellow and violet checkerboard, sunburst base in ocean-blue gradient.

Dialog nenek: "Dindingnya kotak-kotak kuning dan ungu. Alas pola matahari biru gradasi. Subhanallah, kreatif!"

[Detik 28-38] The completed popsicle stick mosque with tiny painted trees and flowers.

Dialog nenek (bangga): "Alhamdulillah! Masjid stik es krim nenek. Ceria, berwarna, dan penuh kreativitas."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Wood sounds, painting, birds, cheerful ambiance. Cute upbeat music.`
        },
        tali: {
            kakek: `[Detik 0-5] Cinematic close-up of coils of rope and twine in natural and dyed vivid colors. A warm kampung setting.

[Detik 5-10] A 70-year-old Indonesian elderly man wearing a cream peci and dark brown shirt sits surrounded by rope coils.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari tali dan tambang. Kuat, bertekstur, warna alam!"

[Detik 10-18] He coils manila rope domes in golden-tan spirals and winds sisal rope minarets tightly.

Dialog kakek (sambil menggulung): "Tali manila emas ini kakek gulung jadi kubah spiral. Sisal jadi menara. Rapi dan kuat!"

[Detik 18-28] Braided jute walls with crimson and indigo cotton cord in diamond patterns, macramé windows.

Dialog kakek: "Tali goni dianyam dengan benang merah dan biru tua motif belah ketupat. Jendela macramé kuning safron. MasyaAllah!"

[Detik 28-38] The completed rope mosque with rich tactile textures in natural and vivid dyed colors.

Dialog kakek (bangga): "Alhamdulillah! Masjid tali tambang. Kuat, bertekstur, dan penuh warna alam."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Rope sounds, birds, gentle breeze. Rustic traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of colorful rope bundles and macramé projects. A warm kampung veranda.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing an ochre-yellow hijab and dark blue batik sits with rope materials.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari tali. Cantik dengan teknik macramé!"

[Detik 10-18] She coils cotton rope domes in coral-pink and cream spirals, wraps jute minarets with turquoise thread.

Dialog nenek (sambil menggulung): "Tali katun pink dan krem jadi kubah spiral. Menara goni dengan aksen toska. Cantik ya!"

[Detik 18-28] Macramé walls in magenta and lime green floral knot patterns, braided base in yellow and cobalt.

Dialog nenek: "Dindingnya macramé magenta dan hijau limau motif bunga. Alas kuning dan biru. Subhanallah!"

[Detik 28-38] The completed rope mosque with tassel decorations in purple and gold.

Dialog nenek (bangga): "Alhamdulillah! Masjid tali nenek. Lembut, cantik, dan penuh seni tekstil."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Rope twisting, gentle breeze, birds. Warm textile art music.`
        },
        pelepah: {
            kakek: `[Detik 0-5] Cinematic close-up of dried banana bark layers in warm amber, caramel, and chocolate-brown tones. A kampung yard with banana trees.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing a white peci and olive-green shirt sits with stacks of pelepah pisang.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari pelepah pisang. Warna alam yang hangat dan indah!"

[Detik 10-18] He layers dried pelepah domes with natural striations in amber and chocolate-brown gradients.

Dialog kakek (sambil menyusun): "Pelepah pisang kering ini warnanya gradasi dari kuning sampai cokelat tua. Kubahnya berlapis-lapis indah."

[Detik 18-28] Pressed banana bark walls in burnt sienna with decorative curled leaf archways in bronze.

Dialog kakek: "Dindingnya kulit pisang gepeng motif alami. Gerbangnya daun pisang kering melengkung warna perunggu. MasyaAllah!"

[Detik 28-38] The completed banana bark mosque in warm earthy natural tones.

Dialog kakek (bangga): "Alhamdulillah! Masjid pelepah pisang. Alami, hangat, dan penuh tekstur."


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Rustling leaves, birds, banana trees swaying. Warm natural music.`,
            nenek: `[Detik 0-5] Cinematic shot of prepared banana trunk fibers in cream to russet-brown tones. A kampung with banana groves.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a chocolate-brown hijab and cream kebaya sits with banana fiber materials.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari pelepah pisang. Warna alamnya hangat dan cantik!"

[Detik 10-18] She layers pelepah domes from pale cream to deep russet-brown like a sunset gradient.

Dialog nenek (sambil menyusun): "Pelepah ini warnanya gradasi krem sampai cokelat kemerahan, seperti sunset. Kubahnya cantik alami."

[Detik 18-28] Pressed fiber walls with natural veining and curled leaf window frames in bronze.

Dialog nenek: "Dindingnya ada urat alami indah. Bingkai jendela daun pisang warna perunggu. Subhanallah!"

[Detik 28-38] The completed banana bark mosque with tiny dried flowers in orange and purple.

Dialog nenek (bangga): "Alhamdulillah! Masjid pelepah pisang nenek. Alami, ramah lingkungan, dan indah."


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Banana leaves rustling, birds, gentle breeze. Warm eco-friendly music.`
        },
        tempurung: {
            kakek: `[Detik 0-5] Cinematic close-up of halved coconut shells in rich dark chocolate-brown and caramel tones. A kampung yard with coconut palms.

[Detik 5-10] A 69-year-old Indonesian elderly man wearing a white peci and deep brown batik sits with piles of coconut shells.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari tempurung kelapa. Warna cokelat tua yang indah dan berkilau!"

[Detik 10-18] He arranges polished half-shell domes in deep espresso-brown, stacks carved shell ring minarets.

Dialog kakek (sambil menyusun): "Tempurung ini kakek poles sampai mengkilap. Kubah cokelat tua ini indah sekali. Menara dari cincin batok bertingkat."

[Detik 18-28] Herringbone-patterned walls of cut shell pieces in dark mahogany and creamy white, mosaic base in burnt umber and ivory.

Dialog kakek: "Dindingnya motif herringbone cokelat dan putih gading. Alas mozaik bintang. MasyaAllah, batok kelapa bisa seindah ini!"

[Detik 28-38] The completed coconut shell mosque gleams with warm polished brown tones.

Dialog kakek (bangga): "Alhamdulillah! Masjid tempurung kelapa. Kuat, berkilau, dan penuh karya seni!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Coconut tapping, birds, tropical breeze. Warm island music.`,
            nenek: `[Detik 0-5] Cinematic shot of sorted coconut shell pieces in deep brown and golden tones. A warm kampung veranda.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a caramel hijab and cream kebaya sits with shell materials.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari tempurung kelapa. Cantik dan mengkilap!"

[Detik 10-18] She arranges smooth polished half-shell domes in warm brown with golden highlights, carved minarets.

Dialog nenek (sambil menyusun): "Batok kelapa ini nenek poles halus. Kubahnya cokelat keemasan. Menara diukir cantik dari satu batok."

[Detik 18-28] Basket-weave patterned walls of thin shell strips in dark and light brown, lattice windows with geometric cutouts.

Dialog nenek: "Dindingnya anyaman cokelat tua dan muda. Jendela ada motif geometris. Subhanallah, indah sekali!"

[Detik 28-38] The completed coconut shell mosque with tiny carved shell flowers at the entrance.

Dialog nenek (bangga): "Alhamdulillah! Masjid tempurung kelapa nenek. Alami, kuat, dan penuh seni!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Coconut shells clinking, birds, gentle breeze. Warm tropical craft music.`
        },
        rempah: {
            kakek: `[Detik 0-5] Cinematic close-up of colorful spices in earthenware bowls — vivid yellow turmeric, deep red chilies, brown cinnamon sticks. A fragrant kampung.

[Detik 5-10] A 70-year-old Indonesian elderly man wearing a brown peci and deep saffron-yellow koko sits with overflowing spice bowls.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari rempah-rempah. Harum dan berwarna-warni!"

[Detik 10-18] He carefully forms bright yellow turmeric powder domes, stacks deep red cinnamon stick minarets with star anise.

Dialog kakek (sambil menyusun): "Kunyit kuning cerah ini jadi kubah. Kayu manis merah tua dan bunga lawang jadi menara. Harumnya luar biasa!"

[Detik 18-28] Walls of dark chocolate cloves with green cardamom pods, archways of golden nutmeg and orange mace.

Dialog kakek: "Cengkeh cokelat tua jadi dinding dengan kapulaga hijau. Pala dan fuli jingga jadi gerbang. MasyaAllah, rempah Indonesia itu luar biasa!"

[Detik 28-38] The completed spice mosque radiates warm saturated earthy colors and seeming fragrance.

Dialog kakek (bangga): "Alhamdulillah! Masjid rempah-rempah. Harum, berwarna, dan khas Indonesia!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Spice grinding, mortar and pestle, birds, breeze. Warm Indonesian traditional music.`,
            nenek: `[Detik 0-5] Cinematic shot of woven baskets of aromatic spices in vivid colors. A warm kampung kitchen setting.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing a vivid saffron-orange hijab and dark brown batik sits surrounded by spices.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari rempah. Cantik, harum, dan penuh warna!"

[Detik 10-18] She forms brilliant turmeric-golden domes, arranges vanilla bean and saffron minarets.

Dialog nenek (sambil menyusun): "Kunyit emas ini jadi kubah cantik. Vanili cokelat dan safron merah jadi menara. Harumnya seperti di pasar rempah!"

[Detik 18-28] Walls of crushed coriander in olive-green mixed with cayenne-red chili powder, star anise archways.

Dialog nenek: "Ketumbar hijau dan cabai merah jadi dinding bergaris. Bunga lawang cokelat jadi gerbang. Subhanallah, indah sekali!"

[Detik 28-38] The completed spice mosque in warm vivid earthy tones.

Dialog nenek (bangga): "Alhamdulillah! Masjid rempah nenek. Harum, cantik, dan penuh cita rasa Indonesia!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Spice aromas, mortar sounds, birds, breeze. Warm spice market music.`
        },
        garam: {
            kakek: `[Detik 0-5] Cinematic shot of geometric salt ponds reflecting the sky like mirrors. A coastal kampung near salt fields.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing a white peci and light blue shirt sits near turquoise salt ponds.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari garam kristal. Berkilau seperti berlian!"

[Detik 10-18] He carefully stacks large sparkling rock salt crystal domes in translucent white, builds pink Himalayan salt minarets.

Dialog kakek (sambil menyusun): "Garam batu putih transparan ini jadi kubah, ada pelangi di dalamnya! Garam pink Himalaya jadi menara merah muda."

[Detik 18-28] Walls of coarse white sea salt in geometric patterns with black Hawaiian salt borders, prismatic salt crystal windows.

Dialog kakek: "Garam laut putih jadi dinding motif geometris. Garam hitam jadi garis kontras. MasyaAllah, kristalnya berkilau!"

[Detik 28-38] The completed salt mosque glitters intensely under tropical sunlight.

Dialog kakek (bangga): "Alhamdulillah! Masjid garam kristal. Berkilau, bersinar, seperti istana berlian!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Salt crunching, ocean waves, coastal birds. Bright coastal music.`,
            nenek: `[Detik 0-5] Cinematic shot of piles of crystalline salt in pure white and vivid pink. A coastal kampung setting.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing a pure white hijab and pale blue batik sits near salt fields.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari garam. Berkilau cantik seperti kristal!"

[Detik 10-18] She arranges crystalline rock salt domes with rainbow refractions, pink salt minarets in coral-rose tones.

Dialog nenek (sambil menyusun): "Garam batu ini tembus cahaya, ada pelangi di dalamnya! Garam pink jadi menara warna mawar."

[Detik 18-28] Walls of black lava salt and white sea salt geometric inlays, grey Celtic salt accent arches.

Dialog nenek: "Garam hitam dan putih jadi dinding motif Islam. Garam abu-abu jadi lengkungan. Subhanallah, berkilau!"

[Detik 28-38] The completed salt mosque sparkling with crystal brilliance.

Dialog nenek (bangga): "Alhamdulillah! Masjid garam nenek. Berkilau, bersih, dan memukau!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Salt crystals, ocean waves, sea breeze, birds. Gentle coastal music.`
        },
        marmer: {
            kakek: `[Detik 0-5] Cinematic close-up of polished marble slabs showing dramatic veining patterns in white, green, and black. A stone workshop.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing a black peci and pristine white koko sits in a stone-carving workshop.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari marmer. Mewah, berkilau, dan megah!"

[Detik 10-18] He sculpts lustrous Carrara white marble domes with grey veining, carves emerald-green Verde Guatemala minarets.

Dialog kakek (sambil memahat): "Marmer Carrara putih ini jadi kubah dengan urat abu-abu mengalir. Marmer hijau zamrud jadi menara. Mewah sekali!"

[Detik 18-28] Nero Marquina black marble walls with white veining, Calacatta Gold archways with honey-gold veining.

Dialog kakek: "Marmer hitam dengan urat putih jadi dinding dramatis. Gerbang marmer emas. MasyaAllah, seperti istana sungguhan!"

[Detik 28-38] The completed marble mosque with mirror-polished surfaces reflecting dramatic light.

Dialog kakek (bangga): "Alhamdulillah! Masjid marmer yang megah. Mewah, berkilau, dan abadi!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Stone chiseling, marble polishing, birds. Grand classical music.`,
            nenek: `[Detik 0-5] Cinematic shot of polished marble samples in white, pink, blue, and red. An elegant kampung workshop.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing an ivory-white hijab and dark jade-green kebaya sits at a marble table.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari marmer. Cantik mewah dan berkilau!"

[Detik 10-18] She carves gleaming Statuario white marble domes, pink Norwegian marble minarets in vivid rose-pink.

Dialog nenek (sambil memahat): "Marmer putih ini jadi kubah berkilau. Marmer pink jadi menara warna mawar. Cantik dan mewah!"

[Detik 18-28] Blue Sodalite marble walls with white patterns, Honey Onyx windows glowing amber.

Dialog nenek: "Marmer biru royal jadi dinding. Onyx madu bersinar kuning keemasan di jendela. Subhanallah, memukau!"

[Detik 28-38] The completed marble mosque polished to mirror finish.

Dialog nenek (bangga): "Alhamdulillah! Masjid marmer nenek. Mewah, berkilau, dan sangat indah!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Stone sculpting, polishing, birds. Elegant classical music.`
        },
        lego: {
            kakek: `[Detik 0-5] Cinematic close-up of thousands of colorful LEGO bricks sorted by vivid primary colors. A bright cheerful kampung.

[Detik 5-10] A 65-year-old Indonesian elderly man wearing a white peci and bright red polo shirt sits with massive LEGO collections.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari LEGO. Warna-warni cerah dan seru!"

[Detik 10-18] He snaps together brilliant royal blue and white dome sections, builds sunflower-yellow and emerald-green minarets.

Dialog kakek (sambil merakit): "Kubah LEGO biru dan putih ini pas sekali. Menara kuning dan hijau bertingkat. Klik, klik, pas! Seru!"

[Detik 18-28] Walls of alternating vivid red, orange, and white bricks in Islamic patterns, purple and turquoise arched doorways.

Dialog kakek: "Dinding merah, oranye, putih motif geometris Islam. Pintu ungu dan toska. MasyaAllah, LEGO bisa jadi masjid!"

[Detik 28-38] The completed LEGO mosque in vivid saturated primary colors.

Dialog kakek (bangga): "Alhamdulillah! Masjid LEGO kakek. Warna-warni, kreatif, dan menyenangkan!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: LEGO clicking, cheerful atmosphere, birds. Playful upbeat music.`,
            nenek: `[Detik 0-5] Cinematic shot of rainbow-sorted LEGO bricks in pastel and vivid colors. A cheerful kampung setting.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing a bright coral hijab and cheerful yellow blouse sits with LEGO bricks.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari LEGO. Lucu dan penuh warna!"

[Detik 10-18] She builds pastel-pink and lavender dome sections, lime-green and sky-blue minarets with alternating patterns.

Dialog nenek (sambil merakit): "Kubah pink dan ungu pastel ini cantik. Menara hijau limau dan biru langit. Klik, klik, jadi! Lucu ya!"

[Detik 18-28] Vivid magenta, orange, and turquoise walls in playful patterns, transparent LEGO stained-glass windows.

Dialog nenek: "Dinding magenta dan toska motif ceria. Jendela LEGO transparan warna-warni. Subhanallah, kreatif!"

[Detik 28-38] The completed LEGO mosque with tiny LEGO minifigure visitors and flower gardens.

Dialog nenek (bangga): "Alhamdulillah! Masjid LEGO nenek. Ceria, lucu, dan penuh imajinasi!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: LEGO clicking, cheerful birds, playful atmosphere. Fun upbeat music.`
        },
        kawat: {
            kakek: `[Detik 0-5] Cinematic close-up of coils of copper, silver, and brass wire catching light. A metalworking kampung bench.

[Detik 5-10] A 69-year-old Indonesian elderly man wearing a black peci and dark grey shirt sits at a metalworking bench with pliers.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari kawat. Berkilau metalik dan penuh detail!"

[Detik 10-18] He twists shimmering copper wire into dense arabesque dome spirals in rose-gold, coils silver aluminum wire minarets.

Dialog kakek (sambil membentuk): "Kawat tembaga rose-gold ini kakek pilin jadi kubah spiral. Kawat perak jadi menara berkilau. Detail sekali!"

[Detik 18-28] Woven brass wire mesh walls in golden lattice patterns, anodized blue wire arches, red enamel wire window frames.

Dialog kakek: "Kawat kuningan emas jadi dinding jala motif bintang. Kawat biru dan merah jadi aksen. MasyaAllah, indah berkilau!"

[Detik 28-38] The completed wire mosque catches light at every angle with metallic reflections.

Dialog kakek (bangga): "Alhamdulillah! Masjid kawat yang berkilau. Kuat, detail, dan penuh seni!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Wire bending, metallic sounds, birds. Industrial craft music.`,
            nenek: `[Detik 0-5] Cinematic shot of colorful wire coils and jewelry tools on a craft table. A warm kampung setting.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a warm bronze hijab and dark brown batik sits with wire materials.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari kawat. Cantik berkilau seperti perhiasan!"

[Detik 10-18] She coils gold-plated wire into filigree dome patterns, shapes rose-gold wire minarets with tiny crescents.

Dialog nenek (sambil membentuk): "Kawat emas ini nenek pilin jadi kubah filigri. Menara rose-gold dengan bulan sabit kecil. Cantik ya!"

[Detik 18-28] Woven silver wire lattice walls, vivid turquoise wire windows, purple and emerald wire floral vine base.

Dialog nenek: "Dinding kawat perak halus. Jendela toska cerah. Alas bunga dari kawat ungu dan hijau. Subhanallah!"

[Detik 28-38] The completed wire mosque with stunning warm-cool metallic contrast.

Dialog nenek (bangga): "Alhamdulillah! Masjid kawat nenek. Berkilau, halus, dan seperti perhiasan!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Wire bending, gentle metallic chimes, birds. Warm jewelry craft music.`
        },
        mosaik: {
            kakek: `[Detik 0-5] Cinematic close-up of tiny mosaic tiles in every vivid color — cobalt, ruby, emerald, gold. A craft workshop.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing a white peci and rich cobalt-blue batik sits with trays of mosaic tiles.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari mosaik. Warna-warni berkilau ribuan keping!"

[Detik 10-18] He places iridescent glass mosaic tiles on domes in vivid cobalt-blue, turquoise, and gold arabesque patterns.

Dialog kakek (sambil menempel): "Keping mosaik biru kobalt dan emas ini jadi kubah arabesque. Berkilau seperti permata! Sabar ya, satu per satu."

[Detik 18-28] Walls of ceramic tiles in orange, purple, magenta, and yellow zellige patterns, stained-glass mosaic windows.

Dialog kakek: "Dinding zellige jingga, ungu, magenta, kuning. Jendela kaca patri mozaik. MasyaAllah, ribuan warna!"

[Detik 28-38] The completed mosaic mosque glittering with thousands of tiny reflections.

Dialog kakek (bangga): "Alhamdulillah! Masjid mosaik kakek. Berkilau ribuan warna, karya seni sejati!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Tile placing, gentle tapping, birds. Mediterranean-inspired music.`,
            nenek: `[Detik 0-5] Cinematic shot of sorted colorful mosaic tiles and grouting tools. A bright kampung craft area.

[Detik 5-10] A 66-year-old Indonesian elderly woman wearing a vivid teal hijab and white kebaya sits beside mosaic trays.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari mosaik. Cantik berkilau penuh warna!"

[Detik 10-18] She places shimmering Venetian glass smalti tiles on domes in royal-blue and turquoise with gold accents.

Dialog nenek (sambil menempel): "Keping Venesia biru dan toska ini jadi kubah berkilau. Aksen emas seperti sinar matahari. Cantik!"

[Detik 18-28] Walls of Moroccan zellige in saffron, crimson, emerald, and cobalt star-and-cross patterns, gold mosaic windows.

Dialog nenek: "Zellige Maroko kuning, merah, hijau, biru motif bintang. Jendela mosaik emas. Subhanallah, memukau!"

[Detik 28-38] The completed mosaic mosque sparkling with color from every surface.

Dialog nenek (bangga): "Alhamdulillah! Masjid mosaik nenek. Berkilau, berwarna, dan sangat indah!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Tile tapping, birds, gentle breeze. Warm Mediterranean music.`
        },
        resin: {
            kakek: `[Detik 0-5] Cinematic close-up of crystal-clear epoxy resin with vivid blue and purple ink swirls. A modern craft workspace.

[Detik 5-10] A 66-year-old Indonesian elderly man wearing a white peci and clean dark navy shirt sits at a resin workspace.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari resin epoksi. Transparan, berkilau, seperti kristal!"

[Detik 10-18] He pours crystal-clear resin with electric-blue and purple alcohol ink creating galaxy patterns, embeds gold leaf.

Dialog kakek (sambil menuang): "Resin bening ini kakek campur tinta biru dan ungu jadi galaksi. Ditaburi emas. Seperti luar angkasa!"

[Detik 18-28] Opaque ocean-teal resin walls with pearlescent shimmer, transparent resin windows with embedded dried flowers.

Dialog kakek: "Dinding resin toska berkilau. Jendela bening dengan bunga asli di dalamnya. MasyaAllah, modern dan indah!"

[Detik 28-38] The completed resin mosque with glass-like polished surfaces and cosmic inner patterns.

Dialog kakek (bangga): "Alhamdulillah! Masjid resin kakek. Transparan, berkilau, seperti permata galaksi!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Resin pouring, gentle ambient sounds, birds. Modern electronic ambient music.`,
            nenek: `[Detik 0-5] Cinematic shot of resin supplies with vivid pigments in magenta, teal, and gold. A clean craft workspace.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a deep ocean-blue hijab and white blouse sits at a resin workspace.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari resin. Bening berkilau seperti kaca kristal!"

[Detik 10-18] She pours crystal-clear resin with swirling magenta, teal, and gold pigments creating ocean-wave patterns.

Dialog nenek (sambil menuang): "Resin bening ini nenek campur pigmen magenta dan toska. Jadi pola ombak beku. Cantik sekali!"

[Detik 18-28] Translucent sunset-orange to violet resin walls with embedded seashells, phosphorescent midnight-blue base.

Dialog nenek: "Dinding gradasi jingga ke ungu dengan kerang asli. Alasnya biru malam menyala. Subhanallah, ajaib!"

[Detik 28-38] The completed resin mosque with mesmerizing translucent colors and embedded treasures.

Dialog nenek (bangga): "Alhamdulillah! Masjid resin nenek. Transparan, cantik, penuh keajaiban warna!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Resin pouring, gentle sounds, birds. Dreamy ambient music.`
        },
        kulit_telur: {
            kakek: `[Detik 0-5] Cinematic close-up of sorted crushed eggshells in white, speckled brown, and dyed vivid colors. A kampung craft table.

[Detik 5-10] A 68-year-old Indonesian elderly man wearing a brown peci and cream-white koko sits with bowls of eggshell pieces.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari kulit telur. Tekstur retak yang unik dan cantik!"

[Detik 10-18] He carefully places finely crushed white eggshell on domes creating crackle-glaze texture, adds turquoise and crimson dyed shells on minarets.

Dialog kakek (sambil menempel): "Kulit telur putih ini jadi kubah tekstur keramik retak. Menara warna toska dan merah dari kulit telur celup."

[Detik 18-28] Walls of speckled brown shell with saffron and cobalt dyed pieces forming Islamic stars, pale blue quail shell windows.

Dialog kakek: "Dinding kulit telur motif bintang Islam warna kuning dan biru. Jendela kulit telur puyuh. MasyaAllah, detail sekali!"

[Detik 28-38] The completed eggshell mosque with extraordinary crackle texture detail.

Dialog kakek (bangga): "Alhamdulillah! Masjid kulit telur. Unik, detail, dan penuh kesabaran!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Eggshell crunching, birds, gentle atmosphere. Delicate craft music.`,
            nenek: `[Detik 0-5] Cinematic shot of sorted eggshell pieces and fine brushes for dyeing. A warm kampung craft setting.

[Detik 5-10] A 64-year-old Indonesian elderly woman wearing a soft cream hijab and pale sage-green kebaya sits with eggshell materials.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari kulit telur. Cantik dan sangat detail!"

[Detik 10-18] She places snow-white eggshell crackle on domes, adds rose-pink and lavender dyed pieces in petal patterns.

Dialog nenek (sambil menempel): "Kulit telur putih jadi kubah tekstur retak cantik. Warna pink dan ungu muda jadi motif kelopak bunga."

[Detik 18-28] Walls of brown speckled shell mixed with tangerine and plum dyed pieces in floral mosaics, ombre base.

Dialog nenek: "Dinding kulit telur cokelat dengan mozaik jingga dan plum motif bunga. Alas gradasi cantik. Subhanallah!"

[Detik 28-38] The completed eggshell mosque with delicate crackle textures and soft colors.

Dialog nenek (bangga): "Alhamdulillah! Masjid kulit telur nenek. Halus, detail, dan penuh ketelitian!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Delicate shell sounds, birds, gentle breeze. Soft craft music.`
        },
        kopi: {
            kakek: `[Detik 0-5] Cinematic close-up of aromatic coffee beans in various roast levels — green, medium amber, dark espresso. A highland kampung.

[Detik 5-10] A 67-year-old Indonesian elderly man wearing a dark brown peci and cream koko sits surrounded by burlap sacks of coffee beans.

Dialog kakek: "Assalamualaikum! Kakek bikin masjid dari biji kopi. Harum dan berwarna cokelat yang kaya!"

[Detik 10-18] He arranges dark-roasted espresso beans into lustrous domes, builds medium-roast chestnut-brown minarets.

Dialog kakek (sambil menyusun): "Kopi sangrai gelap ini jadi kubah berkilau. Sangrai sedang warna cokelat kastanye jadi menara. Harumnya luar biasa!"

[Detik 18-28] Walls of green unroasted beans in olive contrasting with dark roast in two-tone geometric patterns, cascara husk windows.

Dialog kakek: "Kopi hijau dan hitam jadi dinding motif dua warna. Kulit kopi kering jadi jendela emas. MasyaAllah, kopi Indonesia memang terbaik!"

[Detik 28-38] The completed coffee mosque in rich brown tones with a steaming cup beside it.

Dialog kakek (bangga): "Alhamdulillah! Masjid biji kopi. Harum, hangat, dan khas Indonesia!"


[CLOSING] The kakek smiles warmly at the camera, raises his hand gently.

Dialog kakek: "Nah, kalau kalian suka video kakek ini, jangan lupa tekan tombol LIKE, terus SUBSCRIBE dan nyalakan lonceng notifikasinya biar nggak ketinggalan video-video kakek yang lain. Share juga ke teman-teman dan keluarga kalian ya. Dukungan kalian sangat berarti. Terima kasih, wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Coffee grinding, beans pouring, birds, highland breeze. Warm café jazz music.`,
            nenek: `[Detik 0-5] Cinematic shot of coffee trees with bright red cherries and sorted beans. A highland kampung coffee garden.

[Detik 5-10] A 65-year-old Indonesian elderly woman wearing a warm coffee-brown hijab and cream batik sits in a coffee garden.

Dialog nenek: "Assalamualaikum! Nenek bikin masjid dari biji kopi. Harum dan cantik!"

[Detik 10-18] She arranges glossy dark-roast bean domes, builds honey-amber light-roast minarets.

Dialog nenek (sambil menyusun): "Kopi hitam berkilau ini jadi kubah. Kopi sangrai muda warna madu jadi menara. Harumnya bikin semangat!"

[Detik 18-28] Walls of green and espresso beans in checkerboard patterns, bright red dried coffee cherry archways, Turkish coffee powder base.

Dialog nenek: "Kopi hijau dan hitam jadi dinding kotak-kotak. Buah kopi merah jadi gerbang. Alas bubuk kopi dengan motif latte art. Subhanallah!"

[Detik 28-38] The completed coffee mosque in rich warm brown tones with a steaming cup beside it.

Dialog nenek (bangga): "Alhamdulillah! Masjid biji kopi nenek. Harum, hangat, dan penuh cinta!"


[CLOSING] The nenek smiles sweetly at the camera and waves gently.

Dialog nenek: "Anak-anak sayang, kalau suka sama video nenek, jangan lupa tekan LIKE dan SUBSCRIBE ya, nyalakan juga lonceng notifikasinya. Share ke teman-teman kalian biar makin banyak yang terinspirasi. Nenek sayang kalian semua, terima kasih ya. Wassalamualaikum warahmatullahi wabarakatuh!"
Audio: Coffee beans, highland breeze, birds singing. Warm café music.`
        }
    }
};

// ─── Material Labels ───
const MATERIAL_LABELS = {
    pasir: 'Pasir',
    tanah: 'Tanah Liat',
    buah: 'Buah-buahan',
    sayuran: 'Sayuran',
    kayu: 'Kayu',
    bambu: 'Bambu',
    batu: 'Batu Alam',
    es: 'Es / Ice',
    cokelat: 'Cokelat',
    kaca: 'Kaca',
    kertas: 'Kertas',
    lilin: 'Lilin',
    gula: 'Gula',
    kerang: 'Kerang Laut',
    biji: 'Biji-bijian',
    kain: 'Kain Tradisional',
    logam: 'Logam',
    kristal: 'Kristal',
    sabun: 'Sabun',
    daur_ulang: 'Daur Ulang',
    kulit: 'Kulit',
    beton: 'Beton',
    keramik: 'Keramik',
    semen: 'Semen',
    rotan: 'Rotan',
    janur: 'Janur Kelapa',
    emas: 'Emas',
    perak: 'Perak',
    mutiara: 'Mutiara',
    bunga: 'Bunga Segar',
    permen: 'Permen',
    koral: 'Koral',
    lumut: 'Lumut & Pakis',
    stik_eskrim: 'Stik Es Krim',
    tali: 'Tali Tambang',
    pelepah: 'Pelepah Pisang',
    tempurung: 'Tempurung Kelapa',
    rempah: 'Rempah-rempah',
    garam: 'Garam',
    marmer: 'Marmer',
    lego: 'Lego',
    kawat: 'Kawat',
    mosaik: 'Mosaik',
    resin: 'Resin Epoksi',
    kulit_telur: 'Kulit Telur',
    kopi: 'Biji Kopi'
};

const CHARACTER_LABELS = {
    kakek: 'Kakek (Berpeci)',
    nenek: 'Nenek (Berkerudung)',
    wanita: 'Wanita Muda (Berkerudung)'
};

const PLATFORM_LABELS = {
    image: 'Google Flow / Imagen Pro',
    video: 'Veo 3',
    grok: 'Grok / xAI Aurora'
};

// ─── Locations Data (80 lokasi) ───
const LOCATIONS = [
    { id: 'kampung_jawa', name: 'Kampung Jawa', emoji: '🏘️', setting: 'a traditional Javanese village (kampung Jawa) with joglo wooden houses, banana trees, coconut palms, bamboo fences, a dirt path, free-range chickens pecking the ground, and a wooden cart nearby' },
    { id: 'sawah_terasering', name: 'Sawah Terasering', emoji: '🌾', setting: 'terraced rice paddies (sawah terasering) in the highlands with cascading green rice fields, mountain backdrop, traditional farmers in conical hats, water flowing between terraces, and misty hills' },
    { id: 'pantai_nelayan', name: 'Pantai Nelayan', emoji: '🏖️', setting: 'a traditional fishing village beach (pantai nelayan) with colorful wooden boats (perahu), fishing nets drying on poles, coconut palms, sandy shore, seagulls, and a lighthouse in the distance' },
    { id: 'tepi_sungai', name: 'Tepi Sungai', emoji: '🏞️', setting: 'the banks of a calm Indonesian river (tepi sungai) with bamboo rafts, children swimming, women washing clothes, lush tropical vegetation, a wooden bridge, and dragonflies hovering' },
    { id: 'pasar_tradisional', name: 'Pasar Tradisional', emoji: '🏪', setting: 'a bustling traditional Indonesian market (pasar tradisional) with wooden stalls, colorful produce, woven baskets, vendors in batik, hanging lanterns, and the aroma of spices' },
    { id: 'kebun_teh', name: 'Kebun Teh', emoji: '🍵', setting: 'a lush tea plantation (kebun teh) in the highland hills with rows of green tea bushes, cool misty air, colonial-era factory buildings, tea pickers, and panoramic mountain views' },
    { id: 'hutan_bambu', name: 'Hutan Bambu', emoji: '🎋', setting: 'a serene bamboo forest (hutan bambu) with towering green bamboo stalks, dappled sunlight filtering through, a natural stone path, birds singing, and a gentle stream nearby' },
    { id: 'desa_nelayan', name: 'Desa Nelayan', emoji: '⛵', setting: 'a coastal fishing village (desa nelayan) with stilted wooden houses over turquoise water, colorful boats, fishermen mending nets, pelicans, and a stunning tropical sunset' },
    { id: 'lereng_gunung', name: 'Lereng Gunung', emoji: '⛰️', setting: 'the slopes of a volcanic mountain (lereng gunung) with cool misty air, pine trees, wild flowers, a winding mountain path, traditional highland houses, and clouds drifting below' },
    { id: 'danau_toba', name: 'Danau Vulkanik', emoji: '🌊', setting: 'the shore of a volcanic crater lake (danau vulkanik) with crystal-clear blue water, traditional Batak-style houses, lush green hills, fishing boats, and morning mist rising from the water' },
    { id: 'kampung_adat', name: 'Kampung Adat', emoji: '🏛️', setting: 'a traditional Indonesian ceremonial village (kampung adat) with ornate carved wooden houses, ancestral totems, thatched roofs, stone pathways, and ancient banyan trees' },
    { id: 'taman_bunga', name: 'Taman Bunga', emoji: '🌸', setting: 'a vibrant flower garden (taman bunga) with rows of colorful blooms — roses, sunflowers, orchids, and jasmine — butterflies fluttering, a gazebo, stone paths, and a decorative fountain' },
    { id: 'pesantren', name: 'Pesantren', emoji: '📖', setting: 'a traditional Islamic boarding school (pesantren) courtyard with white-washed buildings, students in white clothing, a prayer hall, shady trees, a well, and the sound of Quran recitation' },
    { id: 'dermaga_kayu', name: 'Dermaga Kayu', emoji: '🚢', setting: 'a rustic wooden pier (dermaga kayu) extending into calm waters, with traditional boats moored alongside, fishermen unloading catch, seabirds, rope coils, and a golden sunset sky' },
    { id: 'perkebunan_kopi', name: 'Kebun Kopi', emoji: '☕', setting: 'a highland coffee plantation (perkebunan kopi) with rows of coffee trees bearing red cherries, shaded by taller trees, a traditional drying area, misty mountains behind, and the rich aroma of roasting beans' },
    { id: 'gua_alam', name: 'Gua Alam', emoji: '🕳️', setting: 'the entrance of a natural limestone cave (gua alam) with dramatic stalactites, lush ferns growing around the mouth, vines draping down, natural light filtering in, and a small waterfall cascading nearby' },
    { id: 'jembatan_gantung', name: 'Jembatan Gantung', emoji: '🌉', setting: 'beside a traditional suspension bridge (jembatan gantung) spanning a deep river gorge, with dense tropical jungle on both sides, mist rising from below, and colorful birds flying overhead' },
    { id: 'pedesaan_sunda', name: 'Desa Sunda', emoji: '🏡', setting: 'a Sundanese village (kampung Sunda) with traditional stilted wooden houses (rumah panggung), a fish pond (kolam ikan), terraced vegetable gardens, bamboo groves, and the sound of angklung music' },
    { id: 'pelabuhan_kecil', name: 'Pelabuhan Kecil', emoji: '⚓', setting: 'a small traditional harbor (pelabuhan kecil) with wooden phinisi sailing ships, busy dock workers, rope coils, crates of spices, and a watchtower overlooking the turquoise sea' },
    { id: 'air_terjun', name: 'Air Terjun', emoji: '💧', setting: 'a majestic tropical waterfall (air terjun) cascading down moss-covered rocks into a crystal pool, surrounded by dense rainforest, colorful butterflies, orchids on tree trunks, and rainbow mist' },
    { id: 'kebun_kelapa', name: 'Kebun Kelapa', emoji: '🥥', setting: 'a vast coconut palm plantation (kebun kelapa) with rows of tall swaying coconut trees, fallen coconuts on the ground, a traditional copra drying area, a small hut, and ocean breeze' },
    { id: 'perkampungan_bugis', name: 'Desa Bugis', emoji: '🏠', setting: 'a traditional Bugis stilt village over water with colorful painted wooden houses on stilts, narrow wooden walkways, fishing canoes, mangrove trees, and the sound of waves lapping' },
    { id: 'taman_kota', name: 'Taman Kota', emoji: '🌳', setting: 'a beautiful city park (taman kota) with manicured gardens, shade trees, a decorative pond with lotus flowers, stone benches, joggers, and a traditional gazebo (pendopo)' },
    { id: 'kebun_rempah', name: 'Kebun Rempah', emoji: '🌿', setting: 'a fragrant spice garden (kebun rempah) with clove trees, cinnamon plants, pepper vines, nutmeg trees, vanilla orchids, a drying rack with spices, and the intoxicating aroma of fresh spices' },
    { id: 'pesisir_mangrove', name: 'Pesisir Mangrove', emoji: '🌴', setting: 'a mangrove coastal area (pesisir mangrove) with tangled aerial roots in shallow water, mudskippers, crabs, herons wading, a wooden boardwalk, small fishing boats, and a serene tidal landscape' },
    { id: 'desa_warna_warni', name: 'Desa Warna-Warni', emoji: '🎨', setting: 'a colorful painted village (kampung warna-warni) with houses painted in vibrant rainbow colors, murals on walls, narrow alleyways adorned with hanging plants, and children playing' },
    { id: 'ladang_jagung', name: 'Ladang Jagung', emoji: '🌽', setting: 'a golden cornfield (ladang jagung) ready for harvest, with tall corn stalks swaying, scarecrows, a simple wooden hut, farmers in straw hats, distant mountains, and golden afternoon light' },
    { id: 'perkampungan_toraja', name: 'Desa Toraja', emoji: '🏔️', setting: 'a traditional Torajan village with iconic tongkonan houses featuring soaring boat-shaped roofs adorned with buffalo horns, carved wooden panels, rice barns (alang), terraced rice fields, and misty highlands' },
    { id: 'muara_sungai', name: 'Muara Sungai', emoji: '🌊', setting: 'a river estuary (muara sungai) where freshwater meets the sea, with mangrove trees, wooden fishing platforms (bagan), pelicans diving, traditional boats, and a dramatic cloudy sky' },
    { id: 'hutan_pinus', name: 'Hutan Pinus', emoji: '🌲', setting: 'a highland pine forest (hutan pinus) with tall pine trees, needle-covered forest floor, cool misty atmosphere, shafts of golden sunlight, wooden benches, and the scent of pine resin' },
    { id: 'kampung_batik', name: 'Kampung Batik', emoji: '🎭', setting: 'a traditional batik-making village (kampung batik) with workshops displaying colorful batik fabrics drying on bamboo racks, women drawing wax patterns with canting, indigo dye vats, and artistic murals' },
    { id: 'tambak_ikan', name: 'Tambak Ikan', emoji: '🐟', setting: 'a traditional fish pond area (tambak ikan) with rectangular fish ponds reflecting the sky, simple bamboo shelters, feeding platforms, a windmill water pump, egrets wading, and lush vegetation' },
    { id: 'bukit_teletubbies', name: 'Padang Rumput Hijau', emoji: '🏔️', setting: 'rolling green grass hills (bukit hijau) like a natural amphitheater with velvet-green slopes, grazing cattle, a lone tree on the hilltop, wildflowers, clear blue sky, and puffy white clouds' },
    { id: 'kebun_strawberry', name: 'Kebun Strawberry', emoji: '🍓', setting: 'a highland strawberry farm (kebun strawberry) with rows of strawberry plants in raised beds, red ripe berries glistening with dew, a greenhouse structure, misty mountain air, and a small farm shop' },
    { id: 'desa_pengrajin', name: 'Desa Pengrajin', emoji: '🏺', setting: 'a traditional artisan village (desa pengrajin) with pottery workshops, wood carving studios, weaving looms, displayed handicrafts, stone pathways, flowering trees, and artisans at work' },
    { id: 'bendungan_kecil', name: 'Bendungan Kecil', emoji: '🌊', setting: 'a small traditional dam (bendungan kecil) with water flowing over the spillway, irrigation channels leading to rice fields, bamboo water wheels (kincir air), lush greenery, and dragonflies' },
    { id: 'perahu_pinisi', name: 'Galangan Kapal', emoji: '🚤', setting: 'a traditional Makassarese shipyard (galangan kapal pinisi) with massive wooden phinisi ships under construction, skilled carpenters at work, wood shavings, harbor cranes, and the open sea beyond' },
    { id: 'kampung_pelangi', name: 'Kampung Pelangi', emoji: '🌈', setting: 'a rainbow-painted hillside village (kampung pelangi) with homes painted in every color of the spectrum, colorful stairways, hanging flower pots, kites flying overhead, and joyful street art' },
    { id: 'padang_savana', name: 'Padang Savana', emoji: '🦌', setting: 'a dry savanna grassland (padang savana) with golden dry grass swaying in the wind, scattered lontar palm trees, wild deer grazing, a rustic fence, and a dramatic sunset with orange-red sky' },
    { id: 'desa_terapung', name: 'Desa Terapung', emoji: '🛖', setting: 'a floating village (desa terapung) on a calm river with houses built on wooden rafts, floating gardens, canoes paddled by villagers, fish traps, water lilies, and reflections on still water' },
    { id: 'kebun_durian', name: 'Kebun Durian', emoji: '🌳', setting: 'a durian orchard (kebun durian) with tall durian trees laden with spiky fruits, fallen durians on the ground, a collection basket, a simple wooden shelter, and the sweet pungent aroma filling the air' },
    { id: 'puncak_bukit', name: 'Puncak Bukit', emoji: '🗻', setting: 'a hilltop summit (puncak bukit) with a 360-degree panoramic view of valleys, distant villages, cloud formations below, a flag post, wildflowers, cool mountain breeze, and golden sunrise' },
    { id: 'kampung_tenun', name: 'Kampung Tenun', emoji: '🧵', setting: 'a traditional weaving village (kampung tenun) with women working on wooden looms creating intricate ikat patterns, colorful threads hanging, finished textiles displayed, and traditional Nusa Tenggara houses' },
    { id: 'sumber_mata_air', name: 'Sumber Mata Air', emoji: '💦', setting: 'a natural freshwater spring (sumber mata air) emerging from mossy rocks in a forest clearing, crystal clear water flowing into a natural pool, ferns and wild orchids around, butterflies and birds' },
    { id: 'desa_sasak', name: 'Desa Sasak', emoji: '🛖', setting: 'a traditional Sasak village (desa Sasak Lombok) with thatched-roof huts made of bamboo and cow dung walls, rice barns (lumbung), a communal yard, woven baskets, and dry tropical landscape' },
    { id: 'kebun_cengkeh', name: 'Kebun Cengkeh', emoji: '🌿', setting: 'a clove plantation (kebun cengkeh) with tall clove trees bearing aromatic flower buds, drying cloves on woven mats in the sun, the rich spicy fragrance, old colonial godowns, and misty hillsides' },
    { id: 'tebing_karang', name: 'Tebing Karang', emoji: '🪨', setting: 'a dramatic sea cliff (tebing karang) overlooking crashing turquoise waves, with a cliff-edge temple, lush tropical vegetation on top, sea spray mist, seabirds nesting, and a brilliant blue horizon' },
    { id: 'desa_megalitik', name: 'Desa Megalitik', emoji: '🗿', setting: 'an ancient megalithic village with massive stone monuments, ancestral graves, carved stone statues, traditional thatched-roof houses, sacred trees, and a mystical misty highland atmosphere' },
    { id: 'perkebunan_sawit', name: 'Kebun Sawit', emoji: '🌴', setting: 'an oil palm plantation edge (tepi kebun sawit) with rows of palm trees bearing red fruit bunches, a simple worker shelter, a dirt road, a small river crossing, and tropical afternoon thunderclouds' },
    { id: 'kampung_pottery', name: 'Desa Gerabah', emoji: '🏺', setting: 'a traditional pottery village (desa gerabah) with potters shaping clay on kick-wheels, rows of drying pots and vases in the sun, a wood-fired kiln, red clay earth, and artisan workshops' },
    // ─── 30 Lokasi Baru ───
    { id: 'kampung_seribu_satu_malam', name: 'Ladang Lavender', emoji: '💜', setting: 'a stunning highland lavender field with rows of purple lavender bushes stretching to the horizon, bees buzzing, a rustic wooden farmhouse, white picket fence, and mountains bathed in soft golden sunlight' },
    { id: 'desa_garam', name: 'Ladang Garam', emoji: '🧂', setting: 'a traditional salt harvesting field (ladang garam) on the coast with geometric salt ponds reflecting the sky like mirrors, salt farmers using wooden rakes, piles of white crystalline salt, and a scorching tropical sun' },
    { id: 'kampung_emas', name: 'Tambang Emas Rakyat', emoji: '⛏️', setting: 'a small-scale gold mining village (kampung tambang emas) with hand-dug mining pits, sluice boxes, muddy water channels, simple miner shelters, and lush jungle surrounding the clearing' },
    { id: 'desa_keramik', name: 'Desa Keramik', emoji: '🫖', setting: 'a ceramic-making village (desa keramik) with artisans painting intricate blue-white patterns on ceramic plates and vases, shelves filled with finished products, glazing kilns, and an open-air workshop' },
    { id: 'kampung_wayang', name: 'Kampung Wayang', emoji: '🎭', setting: 'a traditional shadow puppet village (kampung wayang) with a dalang workshop displaying carved leather puppets, a white screen (kelir), gamelan instruments, banana tree trunk for puppet stands, and dim atmospheric lighting' },
    { id: 'pulau_kecil', name: 'Pulau Kecil', emoji: '🏝️', setting: 'a tiny tropical island (pulau kecil) with white sand beach, crystal clear turquoise water, coconut palms leaning over the shore, a single wooden hut with thatched roof, coral reefs visible through the water, and a traditional outrigger canoe' },
    { id: 'kebun_vanili', name: 'Kebun Vanili', emoji: '🌱', setting: 'a vanilla plantation (kebun vanili) with vanilla orchid vines climbing up support trees, green vanilla bean pods hanging, a traditional drying shed with cured vanilla beans, fragrant tropical air, and tropical birds' },
    { id: 'desa_perak', name: 'Desa Perak', emoji: '✨', setting: 'a traditional silver-smithing village (desa perak) with artisans hammering and engraving intricate silver jewelry and ornaments, display cases with filigree work, small forges, and a Balinese temple nearby' },
    { id: 'hutan_bakau', name: 'Hutan Bakau', emoji: '🌿', setting: 'a dense mangrove forest (hutan bakau) with tangled root systems forming natural tunnels, muddy tidal flats, monitor lizards, kingfishers perched on branches, a wooden canoe pathway, and green canopy above' },
    { id: 'kampung_karet', name: 'Kebun Karet', emoji: '🌳', setting: 'a rubber tree plantation (kebun karet) with rows of tapped rubber trees dripping white latex into coconut shell cups, a smoky rubber processing shed, red clay paths, and early morning fog' },
    { id: 'desa_anyaman', name: 'Desa Anyaman', emoji: '🧺', setting: 'a basket weaving village (desa anyaman) with women weaving rattan and pandanus leaves into baskets, mats, and hats under shady trees, drying materials laid out, and colorful finished products displayed' },
    { id: 'lembah_hijau', name: 'Lembah Hijau', emoji: '🏞️', setting: 'a deep green valley (lembah hijau) surrounded by steep forested hills, a winding river at the bottom, a suspension bridge crossing, terraced vegetable farms on the slopes, and morning mist rolling through' },
    { id: 'kampung_lebah', name: 'Peternakan Lebah', emoji: '🐝', setting: 'a traditional bee farm (peternakan lebah madu) with rows of wooden beehives, bees swarming around flowering trees, jars of golden honey on display, a simple processing shed, and wildflower meadows' },
    { id: 'pesisir_karang', name: 'Pesisir Karang', emoji: '🐚', setting: 'a rocky coral coastline (pesisir karang) with tide pools revealing colorful sea life, wave-smoothed rocks, traditional fishing boats pulled ashore, a seaweed drying area, and a dramatic ocean horizon' },
    { id: 'desa_ukir_bali', name: 'Desa Ukir Bali', emoji: '🗿', setting: 'a Balinese wood carving village with artisans sculpting Hindu mythological figures, temple gate carvings, ornate door panels, surrounded by a lush tropical courtyard with frangipani trees and a stone wall temple' },
    { id: 'kampung_gambir', name: 'Kampung Gambir', emoji: '🏘️', setting: 'an old colonial-era kampung (kampung gambir) with Dutch-influenced architecture, whitewashed walls, terracotta tile roofs, arched windows, a banyan tree-shaded square, and a vintage water fountain' },
    { id: 'kebun_markisa', name: 'Kebun Markisa', emoji: '🍈', setting: 'a passion fruit farm (kebun markisa) on highland slopes with vines climbing on wire trellises, ripe purple and yellow fruits hanging, a packing shed, mountain views, and cool refreshing highland air' },
    { id: 'desa_ulos', name: 'Desa Ulos Batak', emoji: '🧣', setting: 'a traditional Batak ulos weaving village with women working at floor looms creating colorful ceremonial textiles, thread dyeing vats, Batak rumah bolon house with carved gables, and Lake Toba visible in the distance' },
    { id: 'sungai_jernih', name: 'Sungai Jernih', emoji: '🏊', setting: 'a crystal clear jungle river (sungai jernih) with smooth river stones visible through transparent water, tropical trees arching over creating a canopy, butterflies, children playing, and sunlight sparkling on the surface' },
    { id: 'kampung_tembikar', name: 'Kampung Tembikar', emoji: '🫙', setting: 'a traditional earthenware village (kampung tembikar) with potters creating large water jars, cooking pots, and decorative items from local clay, hand-built kilns smoking, and stacks of finished brown pottery' },
    { id: 'taman_kupu', name: 'Taman Kupu-Kupu', emoji: '🦋', setting: 'a tropical butterfly garden (taman kupu-kupu) with hundreds of colorful butterflies fluttering among exotic flowers, a netted greenhouse, feeding stations, orchids, hibiscus, and lush tropical plants' },
    { id: 'desa_jagung', name: 'Desa Jagung NTT', emoji: '🌾', setting: 'a dry eastern Indonesian village (desa NTT) with traditional beehive-shaped thatched huts (lopo), corn cobs drying on racks, arid savanna landscape, lontar palms, goats, and warm dry-season light' },
    { id: 'kampung_rajut', name: 'Kampung Rajut', emoji: '🧶', setting: 'a colorful knitting village (kampung rajut) with colorful yarn installations decorating fences and trees, elderly women knitting on porches, baskets of colorful wool, and walls adorned with crocheted art' },
    { id: 'telaga_warna', name: 'Telaga Warna', emoji: '🌈', setting: 'a mystical color-changing lake (telaga warna) surrounded by dense highland forest, the lake surface showing hues of blue, green, and gold from mineral deposits, wooden viewing platform, mist, and absolute serenity' },
    { id: 'desa_sutera', name: 'Desa Sutera', emoji: '🪱', setting: 'a silk-producing village (desa sutera) with mulberry tree groves, silkworm trays in a ventilated shed, silk threads being wound on spools, beautiful silk fabrics draped for display, and a Sulawesi-style house' },
    { id: 'kampung_coklat', name: 'Kebun Coklat', emoji: '🍫', setting: 'a cacao plantation (kebun coklat) with cacao trees bearing large colorful pods in yellow, orange, and red, a fermentation and drying area, the rich aroma of chocolate, a rustic processing hut, and tropical shade trees' },
    { id: 'pantai_pasir_hitam', name: 'Pantai Pasir Hitam', emoji: '🖤', setting: 'a dramatic black sand beach (pantai pasir hitam) of volcanic origin with jet-black sand contrasting turquoise waves, traditional fishing boats, driftwood, coconut palms, dramatic clouds, and a distant volcanic peak' },
    { id: 'desa_songket', name: 'Desa Songket', emoji: '👘', setting: 'a traditional songket weaving village (desa songket) with women at large wooden looms interlacing gold and silver metallic threads into silk fabric, finished songket displayed on mannequins, a Malay-style raised house, and a royal heritage atmosphere' },
    { id: 'kampung_sagu', name: 'Kampung Sagu Papua', emoji: '🌴', setting: 'a Papuan sago palm village (kampung sagu) with traditional stilt houses (honai) over swampy ground, sago palm processing with wooden troughs, a communal cooking area, tropical rainforest backdrop, and birds of paradise' }
];

// ─── State ───
let state = {
    platform: null,
    material: null,
    character: null,
    location: null,
    scene: null,  // null for image, '0'|'1'|'2'|'full' for video
    grokMode: null // null for non-grok, 'image'|'video' for grok
};

// ─── Scene Labels ───
const SCENE_LABELS = {
    '0': 'Scene 1 — Opening',
    '1': 'Scene 2 — Proses',
    '2': 'Scene 3 — Closing',
    'full': 'Full Video'
};

// ─── DOM Elements ───
const platformBtns = document.querySelectorAll('.btn-platform');
const materialBtns = document.querySelectorAll('.btn-material');
const characterBtns = document.querySelectorAll('.btn-character');
const sceneBtns = document.querySelectorAll('.btn-scene');
const btnSceneFull = document.getElementById('btnSceneFull');
const scenePanel = document.getElementById('scenePanel');
const grokModePanel = document.getElementById('grokModePanel');
const grokModeBtns = document.querySelectorAll('.btn-grok-mode');
const generateBtn = document.getElementById('generateBtn');
const outputSection = document.getElementById('outputSection');
const outputBox = document.getElementById('outputBox');
const outputTagPlatform = document.getElementById('outputTagPlatform');
const outputTagMaterial = document.getElementById('outputTagMaterial');
const outputTagCharacter = document.getElementById('outputTagCharacter');
const copyBtn = document.getElementById('copyBtn');
const charCount = document.getElementById('charCount');
const toast = document.getElementById('toast');
const locationGrid = document.getElementById('locationGrid');
const locationSearch = document.getElementById('locationSearch');
const locationCount = document.getElementById('locationCount');

// ─── Populate Location Grid ───
function populateLocationGrid() {
    locationGrid.innerHTML = '';
    LOCATIONS.forEach(loc => {
        const btn = document.createElement('button');
        btn.className = 'btn-location';
        btn.dataset.value = loc.id;
        btn.innerHTML = `<span class="loc-emoji">${loc.emoji}</span><span class="loc-name">${loc.name}</span>`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-location').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            btn.classList.add('pop');
            setTimeout(() => btn.classList.remove('pop'), 200);
            state.location = loc.id;
            updateGenerateBtn();
        });
        locationGrid.appendChild(btn);
    });
    locationCount.textContent = `${LOCATIONS.length} lokasi`;
}

// ─── Location Search ───
locationSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const buttons = locationGrid.querySelectorAll('.btn-location');
    let visibleCount = 0;
    buttons.forEach(btn => {
        const name = btn.querySelector('.loc-name').textContent.toLowerCase();
        if (name.includes(query)) {
            btn.classList.remove('hidden');
            visibleCount++;
        } else {
            btn.classList.add('hidden');
        }
    });
    locationCount.textContent = `${visibleCount} lokasi`;
});

// ─── Button Selection Logic ───
function setupButtonGroup(buttons, stateKey) {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            btn.classList.add('pop');
            setTimeout(() => btn.classList.remove('pop'), 200);
            state[stateKey] = btn.dataset.value;

            // Show/hide panels when platform changes
            if (stateKey === 'platform') {
                if (btn.dataset.value === 'video') {
                    scenePanel.style.display = 'block';
                    grokModePanel.style.display = 'none';
                    state.grokMode = null;
                    grokModeBtns.forEach(b => b.classList.remove('active'));
                } else if (btn.dataset.value === 'grok') {
                    grokModePanel.style.display = 'block';
                    scenePanel.style.display = 'none';
                    state.scene = null;
                    state.grokMode = null;
                    sceneBtns.forEach(b => b.classList.remove('active'));
                    btnSceneFull.classList.remove('active');
                    grokModeBtns.forEach(b => b.classList.remove('active'));
                } else {
                    scenePanel.style.display = 'none';
                    grokModePanel.style.display = 'none';
                    state.scene = null;
                    state.grokMode = null;
                    sceneBtns.forEach(b => b.classList.remove('active'));
                    btnSceneFull.classList.remove('active');
                    grokModeBtns.forEach(b => b.classList.remove('active'));
                }
            }

            updateGenerateBtn();
        });
    });
}

setupButtonGroup(platformBtns, 'platform');
setupButtonGroup(materialBtns, 'material');
setupButtonGroup(characterBtns, 'character');

// ─── Grok Mode Button Logic ───
grokModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        grokModeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        btn.classList.add('pop');
        setTimeout(() => btn.classList.remove('pop'), 200);
        state.grokMode = btn.dataset.value;

        // Show scene panel if video mode is selected
        if (btn.dataset.value === 'video') {
            scenePanel.style.display = 'block';
        } else {
            scenePanel.style.display = 'none';
            state.scene = null;
            sceneBtns.forEach(b => b.classList.remove('active'));
            btnSceneFull.classList.remove('active');
        }

        updateGenerateBtn();
    });
});

// ─── Scene Button Logic ───
sceneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sceneBtns.forEach(b => b.classList.remove('active'));
        btnSceneFull.classList.remove('active');
        btn.classList.add('active');
        btn.classList.add('pop');
        setTimeout(() => btn.classList.remove('pop'), 200);
        state.scene = btn.dataset.value;
        updateGenerateBtn();
    });
});

btnSceneFull.addEventListener('click', () => {
    sceneBtns.forEach(b => b.classList.remove('active'));
    btnSceneFull.classList.add('active');
    state.scene = 'full';
    updateGenerateBtn();
});

// ─── Generate Button State ───
function updateGenerateBtn() {
    const baseSelected = state.platform && state.material && state.character && state.location;
    if (state.platform === 'video') {
        generateBtn.disabled = !(baseSelected && state.scene !== null);
    } else if (state.platform === 'grok') {
        // Grok requires mode selection; if video mode, also requires scene
        if (!state.grokMode) {
            generateBtn.disabled = true;
        } else if (state.grokMode === 'video') {
            generateBtn.disabled = !(baseSelected && state.scene !== null);
        } else {
            generateBtn.disabled = !baseSelected;
        }
    } else {
        generateBtn.disabled = !baseSelected;
    }
}

// ─── Extract Scene from Full Prompt ───
function extractScene(fullPrompt, sceneNumber) {
    if (sceneNumber === 'full') return fullPrompt;

    // Split prompt into sections by [Detik X-Y] markers
    const parts = fullPrompt.split(/(?=\[Detik \d+-\d+\])/);
    const timedParts = parts.filter(p => p.match(/^\[Detik \d+-\d+\]/));

    // Extract audio line (last part that starts with "Audio:")
    const audioMatch = fullPrompt.match(/\nAudio:[\s\S]*$/);
    const audio = audioMatch ? audioMatch[0].trim() : '';

    // Remove audio from last timed part
    if (timedParts.length > 0) {
        timedParts[timedParts.length - 1] = timedParts[timedParts.length - 1].replace(/\nAudio:[\s\S]*$/, '').trim();
    }

    let selectedParts;
    const idx = parseInt(sceneNumber);

    if (idx === 0) {
        // Scene 1: Opening & Perkenalan — first 2 sections
        selectedParts = timedParts.slice(0, 2);
    } else if (idx === 1) {
        // Scene 2: Proses Pembuatan — middle 2 sections
        selectedParts = timedParts.slice(2, 4);
    } else {
        // Scene 3: Hasil & Subscribe — last 2 sections
        selectedParts = timedParts.slice(4);
    }

    // Renumber timestamps starting from 0
    let offset = 0;
    const firstMatch = selectedParts[0]?.match(/\[Detik (\d+)-/);
    if (firstMatch) offset = parseInt(firstMatch[1]);

    let result = selectedParts.map(part => {
        return part.replace(/\[Detik (\d+)-(\d+)\]/g, (match, start, end) => {
            return `[Detik ${parseInt(start) - offset}-${parseInt(end) - offset}]`;
        });
    }).join('\n\n');

    // Add audio description
    if (audio) {
        result += '\n\n' + audio;
    }

    return result.trim();
}

// ─── Inject Location into Prompt ───
function injectLocation(prompt, locationSetting, platform) {
    if (platform === 'image' || platform === 'grok') {
        return prompt.replace(
            /The setting is [^.]+\.|The kampung background [^.]+\.|The village background [^.]+\.|Behind him,[^.]+\.|Behind her,[^.]+\.|The kampung scene behind her [^.]+\.|Village backdrop [^.]+\.|Surrounding her [^.]+\. The village setting [^.]+\./gi,
            `The setting is ${locationSetting}.`
        );
    } else {
        return prompt.replace(
            /a peaceful Indonesian village \(kampung\)[^.]*\.|a traditional Indonesian kampung[^.]*\.|an Indonesian kampung[^.]*\.|a kampung[^.]*vegetable garden[^.]*\./gi,
            `${locationSetting}.`
        );
    }
}

// ─── Clean Dialog for Grok (Fix Noise without Removing Dialog) ───
function cleanDialogForGrok(prompt) {
    return prompt
        // Clean dialog lines: remove quotes but keep text, fix special chars
        .replace(/Dialog\s+(kakek|nenek|wanita)(\s*\([^)]*\))?\s*:\s*"([^"]*)"/gi,
            (match, char, paren, dialogText) => {
                const label = paren
                    ? `Dialog ${char} ${paren.trim()}`
                    : `Dialog ${char}`;
                const cleanText = dialogText
                    .replace(/\.\.\./g, ', ')      // Ellipsis → comma
                    .replace(/\.\.\s*/g, ', ')      // Double dot → comma
                    .replace(/!{2,}/g, '!')         // Multiple ! → single
                    .replace(/\?{2,}/g, '?')        // Multiple ? → single
                    .replace(/—/g, ', ')             // Em dash → comma
                    .replace(/–/g, ', ')             // En dash → comma
                    .replace(/\s{2,}/g, ' ')         // Multiple spaces → single
                    .replace(/,\s*,/g, ',')          // Double commas → single
                    .replace(/,\s*\./g, '.')         // Comma before period → period
                    .trim();
                return `${label}: ${cleanText}`;
            })
        // Clean up multiple consecutive newlines
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

// ─── Generate Prompt ───
generateBtn.addEventListener('click', () => {
    const { platform, material, character, location, scene, grokMode } = state;

    if (!platform || !material || !character || !location) return;
    if (platform === 'video' && scene === null) return;
    if (platform === 'grok' && !grokMode) return;
    if (platform === 'grok' && grokMode === 'video' && scene === null) return;

    // Determine which prompt set to use
    let promptKey;
    if (platform === 'grok') {
        promptKey = grokMode; // 'image' or 'video'
    } else {
        promptKey = platform; // 'image' or 'video'
    }
    let prompt = PROMPTS[promptKey]?.[material]?.[character];

    if (!prompt) {
        outputBox.textContent = '❌ Prompt tidak ditemukan untuk kombinasi ini.';
        return;
    }

    // Find location data
    const locData = LOCATIONS.find(l => l.id === location);
    if (locData) {
        const effectivePlatform = (platform === 'grok') ? grokMode : platform;
        prompt = injectLocation(prompt, locData.setting, effectivePlatform);
    }

    // Extract scene for video prompts
    const isVideoMode = (platform === 'video') || (platform === 'grok' && grokMode === 'video');
    if (isVideoMode && scene !== null) {
        prompt = extractScene(prompt, scene);
    }

    // Clean dialog formatting for Grok video mode (keep dialog, remove noise)
    if (platform === 'grok' && grokMode === 'video') {
        prompt = cleanDialogForGrok(prompt);
    }

    // Update output
    outputBox.textContent = prompt;
    // Show platform label with Grok mode info
    if (platform === 'grok') {
        const modeLabel = grokMode === 'image' ? 'Gambar' : 'Video';
        outputTagPlatform.textContent = `Grok / xAI Aurora (${modeLabel})`;
    } else {
        outputTagPlatform.textContent = PLATFORM_LABELS[platform];
    }
    outputTagMaterial.textContent = MATERIAL_LABELS[material];
    outputTagCharacter.textContent = CHARACTER_LABELS[character];

    // Add scene info for video
    const sceneInfo = (isVideoMode && scene !== null) ? ` • ${SCENE_LABELS[scene]}` : '';
    charCount.textContent = `${prompt.length} karakter${sceneInfo}`;

    // Show output section
    outputSection.classList.add('visible');

    // Reset copy button
    copyBtn.innerHTML = '📋 Copy Prompt';
    copyBtn.classList.remove('copied');

    // Scroll to output
    setTimeout(() => {
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
});

// ─── Copy to Clipboard ───
copyBtn.addEventListener('click', async () => {
    const text = outputBox.textContent;

    try {
        await navigator.clipboard.writeText(text);
        copyBtn.innerHTML = '✅ Berhasil Disalin!';
        copyBtn.classList.add('copied');
        showToast('✅ Prompt berhasil disalin ke clipboard!');

        setTimeout(() => {
            copyBtn.innerHTML = '📋 Copy Prompt';
            copyBtn.classList.remove('copied');
        }, 3000);
    } catch (err) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            copyBtn.innerHTML = '✅ Berhasil Disalin!';
            copyBtn.classList.add('copied');
            showToast('✅ Prompt berhasil disalin ke clipboard!');
        } catch (e) {
            showToast('❌ Gagal menyalin. Silakan salin manual.');
        }
        document.body.removeChild(textArea);

        setTimeout(() => {
            copyBtn.innerHTML = '📋 Copy Prompt';
            copyBtn.classList.remove('copied');
        }, 3000);
    }
});

// ─── Toast Notification ───
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ─── Initialize ───
populateLocationGrid();
updateGenerateBtn();
