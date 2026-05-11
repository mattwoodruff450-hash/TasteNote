// ─────────────────────────────────────────────
//  TasteNote - WSET Question Bank
//  500 questions across Level 1, 2 and 3
// ─────────────────────────────────────────────

const WSET_QUESTIONS = {

// ─────────────────────────────────────────────
//  LEVEL 1 - 100 Questions
//  Award in Wines
// ─────────────────────────────────────────────
1: [

  // Basics
  { q: 'What are the three main colours of wine?', a: 'Red, white and rose.' },
  { q: 'Name the five key factors that affect wine style and quality.', a: 'Climate, soil, grape variety, viticulture (vineyard management) and winemaking.' },
  { q: 'What does tannin contribute to a wine?', a: 'Tannin gives red wines a drying, grippy texture. It comes from grape skins, seeds and oak barrels, and acts as a natural preservative.' },
  { q: 'What is the difference between a dry and a sweet wine?', a: 'A dry wine has little or no residual sugar left after fermentation. A sweet wine retains significant sugar.' },
  { q: 'What is fermentation?', a: 'Fermentation is the process by which yeast converts the natural sugars in grape juice into alcohol and carbon dioxide.' },
  { q: 'What is yeast and what role does it play in winemaking?', a: 'Yeast is a microorganism that consumes sugar and produces alcohol and CO2. Without yeast, fermentation cannot occur.' },
  { q: 'What does ABV stand for and what does it mean?', a: 'ABV stands for Alcohol By Volume. It is the percentage of the wine that is pure alcohol, typically between 11% and 15% for table wine.' },
  { q: 'What is acidity in wine and why does it matter?', a: 'Acidity gives wine freshness and crispness. It balances sweetness, helps preserve the wine and makes it food-friendly.' },
  { q: 'What is the purpose of sulfur dioxide in winemaking?', a: 'Sulfur dioxide (SO2) is used as a preservative and antioxidant. It protects wine from oxidation and unwanted microbial activity.' },
  { q: 'What is "body" in wine tasting?', a: 'Body refers to the weight and fullness of the wine in the mouth. It is often described as light, medium or full, and is influenced by alcohol, extract and residual sugar.' },

  // Grape varieties - red
  { q: 'Name three classic red grape varieties.', a: 'Cabernet Sauvignon, Merlot and Pinot Noir. Others include Syrah/Shiraz, Tempranillo, Sangiovese and Malbec.' },
  { q: 'What flavours are typical of Cabernet Sauvignon?', a: 'Blackcurrant, blackberry, cedar, tobacco and often bell pepper when grown in cooler climates. Full body and high tannin.' },
  { q: 'What flavours are typical of Merlot?', a: 'Plum, cherry, chocolate and soft tannins. Generally rounder and more approachable than Cabernet Sauvignon.' },
  { q: 'What flavours are typical of Pinot Noir?', a: 'Strawberry, raspberry, cherry and earthy notes such as forest floor. Light to medium body with silky tannins.' },
  { q: 'What flavours are typical of Syrah or Shiraz?', a: 'In cool climates: black pepper, olive and smoked meat. In warm climates: ripe blackberry, chocolate and jam. Full body and firm tannins.' },
  { q: 'What is Malbec and where is it from originally?', a: 'Malbec is a red grape originally from France (Cahors) that became famous in Argentina. It produces full-bodied wines with dark fruit, plum and chocolate flavours.' },
  { q: 'What is Tempranillo?', a: 'Tempranillo is the main red grape of Spain, used in Rioja and Ribera del Duero. It produces wines with cherry, leather and tobacco notes.' },
  { q: 'What is Grenache (Garnacha)?', a: 'Grenache is a widely planted red grape producing wines with red fruit, white pepper and high alcohol. It is important in the Southern Rhone, Spain and Australia.' },
  { q: 'What grape is Barolo made from?', a: 'Barolo is made from Nebbiolo, a high-tannin, high-acid grape producing wines with tar, rose and cherry characters.' },
  { q: 'What grape is Chianti made from?', a: 'Chianti is made primarily from Sangiovese, producing wines with cherry, dried herbs and firm acidity.' },

  // Grape varieties - white
  { q: 'Name two classic white grape varieties.', a: 'Chardonnay and Sauvignon Blanc. Others include Riesling, Pinot Grigio, Gewurztraminer and Viognier.' },
  { q: 'What flavours are typical of Chardonnay?', a: 'Unoaked: apple, lemon and pear. Oaked: butter, vanilla and toast. It is versatile and grown across the world.' },
  { q: 'What flavours are typical of Sauvignon Blanc?', a: 'Gooseberry, cut grass, nettle and citrus. In warmer climates, more tropical fruit. High acidity and usually unoaked.' },
  { q: 'What is Riesling known for?', a: 'High acidity, floral aromas, petrol notes with age and a range of styles from bone dry to very sweet. Grown mainly in Germany, Alsace and Austria.' },
  { q: 'What is Pinot Grigio or Pinot Gris?', a: 'The same grape variety. As Pinot Grigio from Italy it is light, crisp and neutral. As Pinot Gris from Alsace it is richer and more aromatic.' },
  { q: 'What is Gewurztraminer known for?', a: 'Intense lychee, rose petal and ginger aromas, low acidity and a rich, oily texture. Often off-dry or sweet.' },
  { q: 'What does Viognier smell like?', a: 'Peach, apricot and floral aromas especially violet. It is full-bodied and low in acidity.' },
  { q: 'What is Muscat known for?', a: 'Muscat is the grape that smells most like fresh grapes. It is used for dry, sweet and sparkling wines across many countries.' },
  { q: 'What is Pinot Blanc?', a: 'A white grape producing wines with apple and light floral notes. Less aromatic than Pinot Gris. Grown in Alsace, Germany and Italy.' },

  // Sparkling and fortified
  { q: 'What is a sparkling wine? Name one example.', a: 'A wine with significant dissolved CO2 that produces bubbles. Examples include Champagne (France), Prosecco (Italy) and Cava (Spain).' },
  { q: 'What makes Champagne different from Prosecco?', a: 'Champagne uses the Traditional Method with a second fermentation in bottle. Prosecco uses the Tank Method. Champagne is generally more complex and has finer bubbles.' },
  { q: 'What is Port?', a: 'Port is a fortified wine from the Douro Valley in Portugal. Grape spirit is added during fermentation to stop it and preserve natural sweetness.' },
  { q: 'What is Sherry?', a: 'Sherry is a fortified wine from Jerez in southern Spain. Styles range from bone dry (Fino) to very sweet (Pedro Ximenez).' },
  { q: 'What grape variety is used in most Champagne?', a: 'Three main varieties: Chardonnay, Pinot Noir and Pinot Meunier. Blanc de Blancs uses only Chardonnay.' },

  // Wine and food
  { q: 'What food would you pair with a full-bodied tannic red wine?', a: 'Rich, fatty or protein-rich foods such as red meat, lamb or aged hard cheese. Tannin binds to protein and softens on the palate.' },
  { q: 'What wine pairs well with fish and seafood?', a: 'Crisp, unoaked white wines such as Muscadet, Sauvignon Blanc, Pinot Grigio or Chablis. High acidity cuts through the delicate flavour.' },
  { q: 'What wine pairs well with cheese?', a: 'It depends on the cheese. Hard cheeses suit red wine. Soft creamy cheeses suit white wine. Blue cheese pairs well with sweet wine such as Sauternes or Port.' },
  { q: 'What is the key rule of weight matching in food and wine pairing?', a: 'Match the weight (body) of the wine to the richness of the food. Light food with light wine, rich food with full-bodied wine.' },
  { q: 'Why does white wine pair well with cream sauces?', a: 'The acidity in white wine cuts through the fat in cream and balances the richness of the sauce, refreshing the palate.' },
  { q: 'What wine suits spicy food?', a: 'Off-dry or sweet wines with low alcohol work best. Sweetness cools the spice and high alcohol intensifies heat. Riesling Spatlese or Gewurztraminer are good choices.' },
  { q: 'What is the classic pairing for Sauternes?', a: 'Foie gras is the classic pairing. The sweetness of the wine and the richness of the foie gras complement each other perfectly.' },

  // Service and storage
  { q: 'What temperature should red wine generally be served at?', a: 'Light reds: 12-14 degrees C. Full-bodied reds: 16-18 degrees C. Serving too warm makes alcohol feel harsh and reduces freshness.' },
  { q: 'What temperature should white wine be served at?', a: 'Light whites: 7-10 degrees C. Fuller whites: 10-13 degrees C. Chilling preserves freshness and suppresses alcohol sensation.' },
  { q: 'What temperature should sparkling wine be served at?', a: 'Sparkling wine should be served cold at 6-10 degrees C. Chilling preserves the bubbles and freshness.' },
  { q: 'What is a decanter used for?', a: 'A decanter is used to aerate wine (exposing it to oxygen to soften tannins and release aromas) and to separate old wine from its sediment.' },
  { q: 'How should sparkling wine be opened safely?', a: 'Point the bottle away from people, remove the foil and cage, grip the cork firmly and rotate the bottle slowly (not the cork) until the cork eases out with a gentle sigh.' },
  { q: 'What does a corked wine smell like?', a: 'A corked wine smells of damp cardboard, wet dog or musty cellar. This is caused by TCA (trichloroanisole), a compound that contaminates the cork.' },
  { q: 'How should wine be stored at home?', a: 'In a cool, dark place at a constant temperature (around 12-14 degrees C), away from vibration, with bottles on their side to keep the cork moist.' },
  { q: 'Why are bottles stored on their side?', a: 'Lying on their side keeps the cork in contact with the wine, preventing it from drying out and shrinking, which would allow air in and spoil the wine.' },
  { q: 'How long can an open bottle of wine last?', a: 'Typically 2-3 days for most wines when sealed and refrigerated. Fortified wines last longer. Sparkling wines go flat quickly without a stopper.' },
  { q: 'What is the ideal long-term wine storage temperature?', a: 'Around 10-14 degrees C with constant temperature and high humidity (around 70%). Fluctuations in temperature accelerate ageing.' },

  // Tasting technique
  { q: 'What is the difference between aroma and bouquet?', a: 'Aroma refers to the scents from the grape variety itself (primary aromas). Bouquet refers to scents that develop through winemaking and bottle ageing.' },
  { q: 'What does "length" or "finish" mean in wine tasting?', a: 'Length is how long the flavours linger in the mouth after swallowing. A long finish is a sign of quality.' },
  { q: 'What is the purpose of swirling wine in the glass?', a: 'Swirling increases the surface area of the wine, releasing aromas by helping volatile compounds evaporate into the air above the glass.' },
  { q: 'What does "mineral" mean in wine tasting?', a: 'Mineral refers to flavours and aromas such as flint, wet stone, chalk or slate. Commonly associated with cool climate whites like Chablis and Riesling.' },
  { q: 'What does "earthy" mean in wine?', a: 'Earthy refers to aromas of soil, forest floor, mushroom or damp earth. Common in aged red wines and wines from traditional regions.' },
  { q: 'What does "oaky" mean in wine tasting?', a: 'Oaky describes flavours and aromas from oak barrel ageing including vanilla, toast, cedar, coconut and spice.' },
  { q: 'What does "fruit-forward" mean?', a: 'A wine where ripe fruit aromas and flavours dominate, often typical of warm climate New World wines.' },
  { q: 'What is a crisp wine?', a: 'A wine with noticeably high acidity that gives a sharp, refreshing, mouthwatering sensation.' },
  { q: 'What is complexity in wine?', a: 'A complex wine shows multiple layers of different aromas and flavours, often changing as it opens up. Complexity is a key indicator of quality.' },
  { q: 'How do you assess a wine\'s colour?', a: 'Hold the glass against a white background and look at the depth (pale, medium, deep) and the hue. In reds, a purple hue suggests youth; a brick or tawny rim suggests age.' },

  // Wine styles and production
  { q: 'What is rose wine and how is it made?', a: 'Rose is made from red grapes with limited skin contact, giving it a pink colour. It can also be made by blending red and white wine (mainly for Champagne rose).' },
  { q: 'What makes a wine full-bodied?', a: 'High alcohol, high extract and sometimes residual sugar all contribute to full body. Warm climate wines tend to be fuller-bodied.' },
  { q: 'What is a blend in wine?', a: 'A blend combines two or more grape varieties or wines from different parcels or vintages to achieve a more complex or consistent result.' },
  { q: 'What does oak ageing add to wine?', a: 'New oak adds vanilla, spice, toast and cedar flavours. It also allows slow oxygen exchange which softens tannins and adds texture.' },
  { q: 'What is the difference between still, sparkling and fortified wine?', a: 'Still wine has no bubbles. Sparkling wine has CO2 bubbles added during fermentation. Fortified wine has grape spirit added, raising the alcohol level.' },
  { q: 'What is maceration in red winemaking?', a: 'Maceration is the period when grape skins are in contact with the juice during fermentation, extracting colour, tannin and flavour compounds.' },
  { q: 'What does vintage mean on a wine label?', a: 'Vintage refers to the year the grapes were harvested. A non-vintage wine blends grapes from multiple years.' },
  { q: 'What does vintage variation mean?', a: 'Each year has different weather conditions that affect grape quality and ripeness, leading to differences in the wine style and quality from year to year.' },
  { q: 'What is terroir?', a: 'Terroir is the complete natural environment of a vineyard including soil, climate, aspect and topography. It gives a wine its sense of place.' },
  { q: 'What is an appellation?', a: 'An appellation is a legally defined and protected geographical area used to identify where grapes are grown. It often comes with rules about grape varieties and winemaking methods.' },

  // Regions - basic
  { q: 'Name three classic Old World wine-producing countries.', a: 'France, Italy and Spain. Others include Germany, Portugal, Austria, Greece and Hungary.' },
  { q: 'Name three classic New World wine-producing countries.', a: 'Australia, Argentina and the USA. Others include New Zealand, Chile, South Africa and China.' },
  { q: 'What is Bordeaux famous for?', a: 'Bordeaux in France is famous for blended red wines based on Cabernet Sauvignon and Merlot, and sweet white wines such as Sauternes.' },
  { q: 'What is Burgundy famous for?', a: 'Burgundy in France is famous for single-variety Pinot Noir reds and Chardonnay whites, with a complex system of classified vineyards.' },
  { q: 'What country produces Rioja?', a: 'Rioja is produced in northern Spain. It is mainly made from Tempranillo and is known for its oak-aged styles.' },
  { q: 'What information must appear on a wine label?', a: 'Country of origin, wine name, producer, vintage (if applicable), volume and alcohol content are required. Quality classification may also appear.' },
  { q: 'What does Reserve mean on a wine label?', a: 'Reserve suggests the wine has been aged for longer or is from a superior selection, but the term is not legally defined in all countries.' },
  { q: 'What does AOC or AOP mean?', a: 'Appellation d\'Origine Controlee (AOC) or Appellation d\'Origine Protegee (AOP) is the French quality classification system guaranteeing origin and production standards.' },
  { q: 'What is the difference between a table wine and a dessert wine?', a: 'A table wine is still, dry and typically consumed with food. A dessert wine is sweet, often with higher alcohol or lower serving volumes, consumed after or with dessert.' },
  { q: 'What is a late harvest wine?', a: 'A wine made from grapes left on the vine longer than usual to accumulate extra sugar, resulting in a sweeter, more concentrated style.' },

  // More basics
  { q: 'What is ice wine or Eiswein?', a: 'Ice wine is made from grapes that have frozen on the vine. Water freezes first, concentrating sugars and acids in the remaining juice, producing an intensely sweet wine.' },
  { q: 'What is natural wine?', a: 'Natural wine is made with minimal intervention, often using wild yeast, no added sulfur or very little, and no fining or filtration. Definitions vary and it is not a legally defined term.' },
  { q: 'What is biodynamic viticulture?', a: 'Biodynamic farming treats the vineyard as a self-sustaining ecosystem. It follows a lunar planting calendar and uses herbal preparations. Certification is available through bodies like Demeter.' },
  { q: 'What is the difference between young and aged wine?', a: 'Young wines have fresh fruit, vibrant colour and pronounced primary aromas. Aged wines develop secondary and tertiary aromas (earthiness, leather, dried fruit), softer tannins and more complex flavours.' },
  { q: 'What causes oxidation in wine?', a: 'Oxidation occurs when wine is exposed to excess oxygen, causing it to lose freshness, turn brown and develop flat, stale, nutty or sherry-like aromas.' },
  { q: 'What is a vintage port?', a: 'Vintage Port is declared only in exceptional years. It is bottled young, aged for decades in bottle and develops complex flavours of dried fruit, chocolate and leather.' },
  { q: 'What is organic viticulture?', a: 'Organic viticulture avoids synthetic pesticides, herbicides and fertilisers. It is certified by official bodies and emphasises working with nature rather than against it.' },
  { q: 'What is the difference between warm and cool climate wines?', a: 'Cool climate wines tend to have higher acidity, lower alcohol, lighter body and more restrained fruit. Warm climate wines tend to have lower acidity, higher alcohol, fuller body and riper fruit.' },
  { q: 'What is a wine aerator?', a: 'A wine aerator is a device that rapidly introduces oxygen into wine as it is poured, mimicking the effect of decanting in a faster, simpler way.' },
  { q: 'What is the difference between a red wine glass and a white wine glass?', a: 'Red wine glasses have a larger bowl to allow more aeration and the release of complex aromas. White wine glasses are smaller to preserve freshness and cooler temperature.' },
],

// ─────────────────────────────────────────────
//  LEVEL 2 - 175 Questions
//  Award in Wines
// ─────────────────────────────────────────────
2: [

  // Systematic Approach to Tasting
  { q: 'What does the WSET Systematic Approach to Tasting (SAT) assess?', a: 'Appearance (clarity, intensity, colour), Nose (condition, intensity, aromas, development), Palate (sweetness, acidity, tannin, alcohol, body, flavour intensity, flavours, finish) and Conclusions (quality, readiness to drink).' },
  { q: 'What does a browning rim on a red wine indicate?', a: 'Age or oxidation. As red wine ages, the colour evolves from purple to ruby, then to garnet and finally to brick and tawny at the rim.' },
  { q: 'What are primary aromas in wine?', a: 'Primary aromas come from the grape variety itself. Examples include citrus, tropical fruit, red fruit, black fruit, floral and herbal notes.' },
  { q: 'What are secondary aromas in wine?', a: 'Secondary aromas develop during fermentation. They include bread dough, brioche, butter (from MLF), cream and yeasty notes.' },
  { q: 'What are tertiary aromas in wine?', a: 'Tertiary aromas develop during oak maturation and bottle ageing. They include vanilla, toast, cedar, leather, earth, mushroom, dried fruit, honey and petrol (in aged Riesling).' },
  { q: 'What does wine development mean on the nose?', a: 'Development describes how the wine has evolved. Youthful wines show fresh primary fruit. Developing wines begin to show some aged character. Fully developed wines show complex tertiary aromas.' },
  { q: 'What is the difference between Acceptable, Good, Very Good, Excellent and Outstanding in WSET quality assessment?', a: 'Outstanding: faultless, complex, long finish. Excellent: very high quality with length and complexity. Very Good: above average. Good: correct and pleasant. Acceptable: minor faults or lack of character.' },
  { q: 'How is wine finish assessed?', a: 'Finish is measured by how long the flavours persist after swallowing. Short: under 3 seconds. Medium: 3-9 seconds. Long: 10 seconds or more. Long finish is a quality indicator.' },

  // Winemaking
  { q: 'What is malolactic fermentation (MLF) and its effect on wine?', a: 'MLF converts sharp malic acid into softer lactic acid. It reduces total acidity and adds a creamy, buttery texture. It is used in most red wines and some white wines such as Chardonnay.' },
  { q: 'What is cold stabilisation in winemaking?', a: 'Chilling wine close to freezing causes tartrate crystals to precipitate out before bottling. This prevents harmless but unattractive crystals forming in the bottle.' },
  { q: 'What is fining in winemaking?', a: 'Fining involves adding a substance (such as egg white, bentonite or isinglass) that attracts and binds to unwanted particles, causing them to fall out of suspension.' },
  { q: 'What is carbonic maceration?', a: 'Whole uncrushed grapes are placed in a carbon dioxide-rich environment. Fermentation begins inside the grape. It produces soft, fruity wines with low tannin. Used in Beaujolais.' },
  { q: 'What is the difference between free-run juice and press wine?', a: 'Free-run juice flows from the grapes naturally before pressing. It is finer and more delicate. Press wine is extracted under pressure and is more tannic and extracted. They are often blended.' },
  { q: 'What is a must in winemaking?', a: 'Must is the unfermented mixture of grape juice, skins, seeds and pulp. It is the raw material for fermentation.' },
  { q: 'What is extended maceration?', a: 'Leaving the wine in contact with the grape skins for longer than usual after fermentation ends, extracting more tannin, colour and flavour complexity.' },
  { q: 'What is skin contact white wine (orange wine)?', a: 'White grapes fermented with their skins in contact, just as red wine is made. This extracts tannin and colour, producing a deeper-hued, more textured white wine.' },
  { q: 'What is thermovinification?', a: 'Heating the grape must to a high temperature briefly to extract colour and flavour before fermentation. Used mainly for wines where colour is important.' },
  { q: 'What is micro-oxygenation?', a: 'The controlled introduction of tiny amounts of oxygen into wine during winemaking to mimic the slow oxygen exchange of barrel ageing, softening tannins without using barrels.' },

  // Oak
  { q: 'What are the main effects of new oak on wine?', a: 'New oak adds vanilla, spice, toast, cedar and coconut flavours. It allows slow oxygen exchange which softens tannins and adds texture and complexity.' },
  { q: 'What is the difference between French and American oak?', a: 'French oak has tighter grain and imparts subtler flavours of spice, cedar and toast. American oak has wider grain and imparts more pronounced vanilla, coconut and dill aromas.' },
  { q: 'What is a barrique?', a: 'A barrique is the standard 225-litre Bordeaux-style oak barrel. Smaller barrels have more wood-to-wine contact, imparting more oak flavour.' },
  { q: 'What is a neutral oak barrel?', a: 'A barrel that has been used multiple times and no longer imparts oak flavour. It is used to age wine with some oxygen exposure without adding wood character.' },
  { q: 'What is the effect of lees ageing on wine?', a: 'Lees are dead yeast cells. Ageing wine on lees (sur lie) adds texture, richness, a creamy mouthfeel and autolytic notes such as bread and biscuit.' },
  { q: 'What is toasting in barrel production?', a: 'Toasting is the process of heating the inside of a barrel during manufacture. The level of toast (light, medium, heavy) affects the flavours imparted to the wine.' },
  { q: 'What does first fill mean for an oak barrel?', a: 'A first fill barrel is being used for the first time. It imparts the most oak flavour. Each subsequent fill (second, third fill) imparts progressively less flavour.' },

  // Climate and viticulture
  { q: 'What is the difference between a continental and maritime climate for viticulture?', a: 'Continental climates have cold winters, hot summers and low rainfall. Maritime climates are moderated by the sea, with milder temperatures and more consistent rainfall. Both can produce high quality wines.' },
  { q: 'What is canopy management?', a: 'Canopy management involves controlling the growth of vine leaves and shoots to achieve the right balance between sunlight, air circulation and shade to ripen grapes evenly.' },
  { q: 'What is green harvesting?', a: 'Removing excess bunches of grapes during the growing season to reduce yield and concentrate flavour, sugar and nutrients in the remaining grapes.' },
  { q: 'What is botrytis and what are its two forms?', a: 'Botrytis cinerea is a fungus that can attack grapes. As grey rot it destroys the harvest. As noble rot (botrytis) in the right conditions it dehydrates grapes, concentrating sugars to produce great sweet wines.' },
  { q: 'What is phylloxera?', a: 'Phylloxera is a louse that attacks the roots of Vitis vinifera vines. It devastated European vineyards in the 19th century. The solution was to graft European vines onto resistant American rootstocks.' },
  { q: 'What is aspect and how does it affect viticulture?', a: 'Aspect refers to the direction a vineyard slope faces. In the Northern Hemisphere, south-facing slopes receive more sunlight and warmth. In the Southern Hemisphere, north-facing slopes are preferred.' },
  { q: 'What is the effect of altitude on viticulture?', a: 'Higher altitude means cooler temperatures and greater UV radiation. This slows ripening, preserves acidity and can produce wines with more freshness, even in otherwise warm climates.' },
  { q: 'What is irrigation and where is it commonly used?', a: 'Irrigation is the artificial watering of vineyards. It is widely used in New World regions such as Argentina, Chile and Australia where rainfall is insufficient. It is restricted in many Old World appellations.' },
  { q: 'What is a single vineyard wine?', a: 'A wine made from grapes grown exclusively in one named vineyard, intended to express the specific character of that site.' },

  // Bordeaux
  { q: 'Name the main appellations of the Left Bank of Bordeaux.', a: 'Medoc, Haut-Medoc, Pauillac, St-Estephe, St-Julien, Margaux and Pessac-Leognan.' },
  { q: 'Name the main appellations of the Right Bank of Bordeaux.', a: 'St-Emilion, Pomerol, Fronsac, Cotes de Bordeaux.' },
  { q: 'What grape varieties are used in red Bordeaux?', a: 'Mainly Cabernet Sauvignon, Merlot and Cabernet Franc. Petit Verdot and Malbec are used in smaller amounts.' },
  { q: 'What is the 1855 Bordeaux classification?', a: 'A classification of Left Bank chateaux into five growths (Premiers to Cinquiemes Crus) based on price and reputation at the time of the Paris Exposition. It remains largely unchanged today.' },
  { q: 'What grape varieties are used in white Bordeaux?', a: 'Mainly Sauvignon Blanc and Semillon, with Muscadelle in smaller quantities.' },
  { q: 'What is Sauternes and how is it made?', a: 'Sauternes is a sweet white wine from Bordeaux made from Semillon, Sauvignon Blanc and Muscadelle affected by noble rot (Botrytis cinerea). Grapes are harvested in multiple passes by hand.' },
  { q: 'What is Entre-Deux-Mers?', a: 'A large appellation in Bordeaux between the Garonne and Dordogne rivers, producing dry white wines mainly from Sauvignon Blanc and Semillon.' },
  { q: 'What is Pomerol famous for?', a: 'Pomerol is a small Right Bank appellation famous for rich, plummy Merlot-dominant wines grown on clay and gravel soils. It has no official classification.' },

  // Burgundy
  { q: 'Name the Burgundy regions from north to south.', a: 'Chablis, Cote de Nuits, Cote de Beaune, Cote Chalonnaise, Maconnais.' },
  { q: 'What is a Grand Cru in Burgundy?', a: 'Grand Cru is the highest quality level in Burgundy, applied to specific named vineyard sites of exceptional character. They represent around 2% of Burgundy production.' },
  { q: 'What is a Premier Cru in Burgundy?', a: 'Premier Cru is the second highest quality level, applied to specific named vineyard sites. The label shows both the village name and the vineyard name.' },
  { q: 'What grape varieties are used in Burgundy?', a: 'Pinot Noir for red wines, Chardonnay for white wines. Aligote is also grown for basic white Burgundy.' },
  { q: 'What is Chablis and what style does it produce?', a: 'Chablis is the northernmost part of Burgundy, producing unoaked or lightly oaked Chardonnay with high acidity, minerality and citrus and green apple flavours.' },
  { q: 'What is the Cote de Nuits known for?', a: 'The Cote de Nuits is the northern part of the Cote d\'Or and is home to Burgundy\'s greatest red wines including Gevrey-Chambertin, Chambolle-Musigny and Vosne-Romanee.' },
  { q: 'What is the Cote de Beaune known for?', a: 'The Cote de Beaune produces both red and white Burgundy. It is home to great whites including Meursault, Puligny-Montrachet and Chassagne-Montrachet, and reds such as Pommard and Volnay.' },
  { q: 'What is Meursault famous for?', a: 'Meursault is a village in the Cote de Beaune producing rich, full-bodied, oaky Chardonnay with butter, hazelnut and toast notes. It has many Premier Cru vineyards but no Grand Cru.' },

  // Rhone Valley
  { q: 'What grape variety dominates the Northern Rhone?', a: 'Syrah for reds, and Viognier, Marsanne and Roussanne for whites.' },
  { q: 'Name the key appellations of the Northern Rhone.', a: 'Cote-Rotie, Condrieu, Chateau-Grillet, St-Joseph, Crozes-Hermitage, Hermitage and Cornas.' },
  { q: 'What is Condrieu and what grape is it made from?', a: 'Condrieu is a Northern Rhone appellation making rich, aromatic dry white wine exclusively from Viognier. It is known for its peach, apricot and violet aromas.' },
  { q: 'What is Chateauneuf-du-Pape?', a: 'A prestigious Southern Rhone appellation producing powerful red wines mainly from Grenache, Syrah and Mourvedre. Up to 18 varieties are permitted. Known for its heat-retaining galets (large stones).' },
  { q: 'What is the GSM blend?', a: 'A blend of Grenache, Syrah and Mourvedre. Common in the Southern Rhone and South Australia, producing wines with red fruit, spice and meaty notes.' },

  // Loire Valley
  { q: 'Name the four main sub-regions of the Loire Valley.', a: 'Pays Nantais (Muscadet), Anjou-Saumur, Touraine and the Upper Loire (Sancerre, Pouilly-Fume).' },
  { q: 'What is Muscadet and what style is it?', a: 'Muscadet is a dry white wine from the Pays Nantais made from Melon de Bourgogne. It is light, crisp and neutral, often aged sur lie for added texture.' },
  { q: 'What is sur lie ageing?', a: 'Sur lie means "on the lees". The wine is left in contact with its dead yeast cells, adding richness, a creamy texture and subtle yeasty flavours.' },
  { q: 'What is Sancerre and what is it made from?', a: 'Sancerre is a wine from the Upper Loire made from Sauvignon Blanc. It is dry, crisp and aromatic with citrus, gooseberry and mineral notes. Red and rose Sancerre is made from Pinot Noir.' },
  { q: 'What is Vouvray?', a: 'Vouvray is a Touraine appellation making wines from Chenin Blanc in styles ranging from bone dry to sweet, and still to sparkling. Acidity allows long ageing.' },
  { q: 'What grape variety is Chinon made from?', a: 'Chinon is made from Cabernet Franc, producing medium-bodied reds with red fruit, leafy and pencil shavings notes. It can also produce rose and white wines.' },

  // Alsace and Germany
  { q: 'What grape varieties are grown in Alsace?', a: 'The four noble varieties are Riesling, Gewurztraminer, Pinot Gris and Muscat. Pinot Blanc and Pinot Noir are also grown.' },
  { q: 'What is Vendange Tardive in Alsace?', a: 'Vendange Tardive (late harvest) wines are made from very ripe grapes. They can be dry or sweet and are always rich and concentrated.' },
  { q: 'What is Selection de Grains Nobles in Alsace?', a: 'Selection de Grains Nobles is made from botrytis-affected grapes. It is always sweet, luscious and very concentrated, comparable to a German Beerenauslese.' },
  { q: 'Name the main wine regions of Germany.', a: 'Mosel, Rheingau, Rheinhessen, Pfalz, Baden, Franken, Nahe, Ahr, Wurttemberg, Sachsen and Saale-Unstrut.' },
  { q: 'What is the German Pradikat classification?', a: 'A quality system based on grape ripeness at harvest. Levels from lowest to highest: Kabinett, Spatlese, Auslese, Beerenauslese, Eiswein, Trockenbeerenauslese.' },
  { q: 'What is Kabinett in Germany?', a: 'The lightest style of Pradikat wine, made from just-ripe grapes. Usually low in alcohol and off-dry to dry with delicate fruit and high acidity.' },
  { q: 'What is Spatlese in Germany?', a: 'Made from grapes harvested late, with more ripeness than Kabinett. Can be dry or medium-sweet with more intensity than Kabinett.' },
  { q: 'What is Trockenbeerenauslese (TBA)?', a: 'Germany\'s sweetest and rarest Pradikat level. Made from individually selected botrytis-affected shrivelled grapes. Intensely sweet, concentrated and capable of very long ageing.' },
  { q: 'What does trocken mean on a German wine label?', a: 'Trocken means dry in German. It indicates the wine has very little residual sugar despite potentially coming from a richer Pradikat harvest level.' },

  // Italy
  { q: 'Name four major Italian wine regions.', a: 'Piedmont, Tuscany, Veneto and Sicily. Others include Friuli, Trentino-Alto Adige and Campania.' },
  { q: 'What is Chianti Classico?', a: 'Chianti Classico is a higher quality subzone within Chianti in Tuscany, with stricter rules, mainly Sangiovese and a black rooster (Gallo Nero) on the label.' },
  { q: 'What is the Amarone production method?', a: 'Grapes (mainly Corvina) are dried for several months (appassimento) to concentrate sugars. They are then fermented to produce a powerful, rich, dry wine.' },
  { q: 'What is Prosecco and how is it made?', a: 'Prosecco is an Italian sparkling wine made from Glera grapes using the Tank Method (Charmat). The second fermentation takes place in a pressurised tank, producing a fresh, fruity style.' },
  { q: 'What is Soave made from?', a: 'Soave is made mainly from Garganega, with up to 30% Trebbiano di Soave or Pinot Bianco. It produces light, dry whites with almond and citrus notes.' },
  { q: 'What is Brunello di Montalcino?', a: 'A prestigious DOCG red wine from Montalcino in Tuscany, made exclusively from Sangiovese Grosso (Brunello). Requires long ageing and is capable of decades of bottle development.' },
  { q: 'What is Franciacorta?', a: 'A DOCG sparkling wine from Lombardy made using the Traditional Method with Chardonnay, Pinot Nero and Pinot Bianco. Often compared to Champagne in quality and style.' },

  // Spain
  { q: 'Name four major Spanish wine regions.', a: 'Rioja, Ribera del Duero, Priorat and Rias Baixas. Others include Rueda, Cava, Jerez and Jumilla.' },
  { q: 'What do Crianza, Reserva and Gran Reserva mean in Rioja?', a: 'Crianza: aged at least 2 years (1 in oak). Reserva: aged at least 3 years (1 in oak). Gran Reserva: aged at least 5 years (18 months in oak). Each indicates longer ageing and potentially higher quality.' },
  { q: 'What is Albarino and where is it from?', a: 'Albarino is an aromatic white grape from Rias Baixas in Galicia, northwest Spain. It produces dry, crisp wines with peach, citrus and floral aromas and saline minerality.' },
  { q: 'What is Cava and how is it made?', a: 'Cava is a Spanish sparkling wine made using the Traditional Method, mainly from Macabeo, Xarello and Parellada grapes. Most production is in Penedes, Catalonia.' },
  { q: 'What is Fino Sherry?', a: 'Fino is the driest, palest style of Sherry, aged biologically under a layer of flor yeast that protects the wine from oxygen. It is light, nutty, saline and bone dry.' },
  { q: 'What is Oloroso Sherry?', a: 'Oloroso is a rich, dark, dry Sherry aged oxidatively without flor. It develops walnut, dried fruit and toffee aromas. It can be sweetened to make cream Sherry.' },

  // Portugal
  { q: 'What is Vinho Verde?', a: 'Vinho Verde is a Portuguese wine from the Minho region in the northwest. It is typically light, high in acidity, low in alcohol and often slightly spritzy. Made from varieties including Alvarinho and Loureiro.' },
  { q: 'What is Port and how is it made?', a: 'Port is a fortified wine from the Douro Valley. During fermentation, grape spirit (aguardente) is added to stop fermentation, preserving natural sweetness and raising alcohol to around 20%.' },
  { q: 'What is the difference between Ruby and Tawny Port?', a: 'Ruby Port is aged in large vessels to preserve red fruit character and deep colour. Tawny Port is aged in small barrels allowing gradual oxidation, producing a tawny colour with nutty, dried fruit flavours.' },
  { q: 'What is LBV Port?', a: 'Late Bottled Vintage Port is made from a single year\'s harvest, aged in barrel for 4-6 years before bottling. It offers vintage Port character at an accessible price.' },
  { q: 'What is Madeira?', a: 'Madeira is a fortified wine from the island of Madeira. It is deliberately heated (estufagem or canteiro method), giving it a distinctive caramelised, nutty and high-acid character. It is virtually indestructible.' },

  // New World
  { q: 'What characterises New World wines compared to Old World?', a: 'New World wines tend to be riper, fuller-bodied with more obvious fruit and higher alcohol. Old World wines are often more restrained with greater emphasis on terroir, acidity and earth.' },
  { q: 'What is Napa Valley known for?', a: 'Napa Valley in California is famous for powerful, full-bodied Cabernet Sauvignon and Cabernet-based blends with dark fruit, oak and polished tannins.' },
  { q: 'What is Oregon known for in wine?', a: 'Oregon, particularly the Willamette Valley, is known for elegant, cool-climate Pinot Noir and Pinot Gris.' },
  { q: 'What is Marlborough, New Zealand known for?', a: 'Marlborough is famous for intensely aromatic Sauvignon Blanc with gooseberry, passion fruit, cut grass and capsicum notes.' },
  { q: 'What is Mendoza, Argentina famous for?', a: 'Mendoza is Argentina\'s most important wine region, famous for full-bodied Malbec with dark plum, blackberry, chocolate and violet notes.' },
  { q: 'What is Barossa Valley known for?', a: 'Barossa Valley in South Australia is known for rich, powerful, old-vine Shiraz with dark fruit, chocolate and spice, and some of the world\'s oldest producing vines.' },
  { q: 'What is Coonawarra known for?', a: 'Coonawarra in South Australia is known for Cabernet Sauvignon grown on distinctive red terra rossa soil over limestone, producing wines with cassis, mint and firm tannin.' },
  { q: 'What is Carmenere?', a: 'Carmenere is a red variety once thought to be Merlot, rediscovered in Chile in the 1990s. It produces wines with dark fruit, green pepper and spice notes.' },
  { q: 'What is Pinotage?', a: 'Pinotage is a South African grape cross between Pinot Noir and Cinsault. It produces wines with dark fruit, coffee and smoky notes. It can be controversial in style.' },
  { q: 'What is Cap Classique?', a: 'Cap Classique is the South African term for Traditional Method sparkling wine, made in the same way as Champagne using a secondary fermentation in bottle.' },

  // Sparkling wine
  { q: 'Describe the Traditional Method (Methode Traditionnelle).', a: 'A base wine is produced. A mixture of sugar and yeast (liqueur de tirage) is added, the wine is bottled, and a second fermentation occurs in bottle. The wine ages on lees, then is riddled, disgorged, and dosage is added.' },
  { q: 'What is the Tank Method (Charmat Method)?', a: 'The second fermentation takes place in a large pressurised tank rather than in individual bottles. The wine is then filtered and bottled under pressure. It is used for Prosecco and Sekt.' },
  { q: 'What is dosage in sparkling wine?', a: 'Dosage is a mixture of wine and sugar added after disgorgement to balance acidity and determine the final sweetness level of the sparkling wine.' },
  { q: 'What does Brut mean on a sparkling wine label?', a: 'Brut indicates a dry style with low residual sugar (under 12g/litre). Other terms from dry to sweet: Extra Brut, Brut, Extra Dry/Extra Sec, Sec, Demi-Sec, Doux.' },
  { q: 'What is Blanc de Blancs Champagne?', a: 'Champagne made exclusively from white grapes, almost always Chardonnay. It is typically lighter, more delicate and mineral in style.' },
  { q: 'What is Blanc de Noirs Champagne?', a: 'Champagne made from red-skinned grapes (Pinot Noir and/or Pinot Meunier) but produced as a white wine. It is often fuller and rounder in style.' },
  { q: 'What is riddling (remuage) in Champagne production?', a: 'Riddling gradually turns and tilts bottles over weeks until the sediment of dead yeast cells collects in the neck of the bottle ready for disgorgement.' },

  // Fortified
  { q: 'What is fortification in winemaking?', a: 'Adding neutral grape spirit (high-strength alcohol) to wine either during or after fermentation. This raises the alcohol level and, if added mid-fermentation, preserves natural grape sweetness.' },
  { q: 'When is fortification added in Port production?', a: 'Fortification occurs during fermentation when approximately half the natural sugars have been converted to alcohol. This stops fermentation and preserves sweetness.' },
  { q: 'What is flor in Sherry production?', a: 'Flor is a layer of yeast that forms on the surface of some Sherries during ageing, protecting them from oxidation and contributing to their characteristic dry, nutty flavour.' },
  { q: 'What is Manzanilla?', a: 'Manzanilla is a Fino-style Sherry aged only in Sanlucar de Barrameda. The coastal conditions encourage a thicker flor, giving the wine a distinctive saline character.' },
  { q: 'What is Amontillado Sherry?', a: 'Amontillado begins as Fino aged under flor, then the flor dies and the wine undergoes oxidative ageing. It is amber in colour with nutty, dry and complex characteristics.' },
  { q: 'What is Pedro Ximenez (PX)?', a: 'Pedro Ximenez is both a grape variety and an extremely sweet Sherry style made from sun-dried grapes. It is dark, syrupy and intensely sweet with raisin, fig and molasses flavours.' },
  { q: 'What is Vin Doux Naturel?', a: 'A French category of fortified sweet wine where fermentation is stopped by adding neutral spirit, preserving grape sweetness. Examples include Muscat de Beaumes-de-Venise and Banyuls.' },

  // Beaujolais
  { q: 'What is Beaujolais and what style is it?', a: 'Beaujolais is a region in southern Burgundy producing mainly light, fruity red wines from Gamay made using carbonic maceration. Ranges from simple Beaujolais to the ten superior crus.' },
  { q: 'What are the ten Beaujolais crus?', a: 'Moulin-a-Vent, Morgon, Chenas, Julienas, Fleurie, Chiroubles, Brouilly, Cotes de Brouilly, Regnie and Saint-Amour. Each has its own character and can age better than basic Beaujolais.' },

  // General production
  { q: 'What is whole-bunch fermentation?', a: 'Fermenting grapes with their stalks intact. This can add savouriness, structure and a stemmy or herbal character to red wines. Used notably in some Burgundy production.' },
  { q: 'What is the AVA system in the USA?', a: 'AVA (American Viticultural Area) is a geographically defined wine-producing region. It does not regulate grape varieties or winemaking, only geographical boundaries.' },
  { q: 'What is the VDP classification in Germany?', a: 'Verband Deutscher Pradikatsweinguter is an association of Germany\'s top estates. It uses its own classification system of vineyard quality levels: Gutswein, Ortswein, Erste Lage and Grosse Lage.' },
  { q: 'What is Ribera del Duero?', a: 'A premium Spanish wine region producing powerful red wines mainly from Tempranillo (known locally as Tinto Fino or Tinta del Pais), with dark fruit, earthiness and fine tannins.' },
  { q: 'What is the Douro region of Portugal?', a: 'The Douro Valley in northern Portugal is the source of Port wine and increasingly of high-quality unfortified red and white table wines from native varieties.' },
  { q: 'What are the main grape varieties used in Port?', a: 'Touriga Nacional, Touriga Franca, Tinta Roriz (Tempranillo), Tinta Barroca and Tinto Cao are the most important. Over 80 varieties are technically permitted.' },
  { q: 'What is Vintage Port?', a: 'Vintage Port is declared only in exceptional years by individual producers. It is aged for just 2 years in barrel before bottling and then aged for decades in bottle, throwing significant sediment.' },
],

// ─────────────────────────────────────────────
//  LEVEL 3 - 225 Questions
//  Award in Wines - Advanced
// ─────────────────────────────────────────────
3: [

  // Terroir and climate
  { q: 'Explain the concept of terroir and its components fully.', a: 'Terroir is the complete natural environment: soil type and geology, drainage, aspect, altitude, macroclimate, mesoclimate and microclimate. Together these give a wine its unique sense of place beyond grape variety alone.' },
  { q: 'What is the difference between macroclimate, mesoclimate and microclimate?', a: 'Macroclimate is the regional climate (e.g. Bordeaux). Mesoclimate is the local climate of a specific site or commune. Microclimate is the immediate environment around individual vines, affected by soil, slope and canopy.' },
  { q: 'What is diurnal temperature variation and why does it matter?', a: 'Diurnal variation is the difference between day and night temperatures. Large variation (common in continental and high-altitude regions) allows grapes to ripen fully in the day while retaining acidity at night.' },
  { q: 'How does soil type affect wine character?', a: 'Soil affects drainage, heat retention, mineral nutrition and vine stress. Clay soils retain water and produce fuller wines. Gravel drains well and retains heat. Limestone promotes acidity and freshness. Volcanic soils often give minerality.' },
  { q: 'What is typicity and why is it assessed in wine evaluation?', a: 'Typicity is how well a wine expresses the expected characteristics of its grape variety, region and vintage. A highly typical wine clearly reflects its origin. An atypical wine may be high quality but unconventional.' },
  { q: 'How are balance, length, intensity, complexity and expression assessed at Level 3?', a: 'Balance: all components (fruit, acid, tannin, alcohol) work in harmony. Length: finish of 10 seconds or more. Intensity: concentration of fruit and flavour. Complexity: multiple layers of evolving aromas. Expression: reflects variety and/or origin.' },
  { q: 'What is heat summation and how is it used?', a: 'Heat summation (degree days) calculates accumulated warmth during the growing season. It helps classify regions by warmth (Region I to V in the Winkler scale) and predict which grapes will ripen.' },
  { q: 'How is climate change affecting traditional wine regions?', a: 'Higher temperatures are advancing harvest dates, increasing alcohol, reducing acidity and in some regions making it harder to grow varieties suited to the traditional style. Some cool regions are benefiting from warmer conditions.' },
  { q: 'What adaptations are winemakers making to cope with warmer vintages?', a: 'Earlier picking, higher altitude planting, different vine training to provide shade, different varieties, night harvesting to preserve freshness, and blending with cooler parcels.' },
  { q: 'What new wine regions are emerging due to climate change?', a: 'England and Wales for sparkling wine, parts of Scandinavia, higher altitudes in traditional countries and southern hemisphere regions such as Tasmania and Patagonia are gaining prominence.' },

  // Advanced Burgundy
  { q: 'Name all five Burgundy sub-regions in order from north to south.', a: 'Chablis, Cote de Nuits, Cote de Beaune, Cote Chalonnaise and Maconnais.' },
  { q: 'What distinguishes Chablis Premier Cru from Grand Cru?', a: 'Grand Cru Chablis (7 vineyards) comes from the best sites on the Serein river\'s right bank with ideal Kimmeridgian limestone exposure. Premier Cru comes from 40 named sites with good but not perfect aspects.' },
  { q: 'What is the role of Kimmeridgian limestone in Chablis?', a: 'Kimmeridgian limestone, studded with ancient oyster fossils, is believed to give Chablis its distinctive flinty, saline minerality and racy acidity. Grand Cru vineyards sit entirely on this soil type.' },
  { q: 'What is Chambolle-Musigny known for stylistically?', a: 'Chambolle-Musigny produces the most elegant, perfumed and feminine Burgundian Pinot Noir. Musigny and Bonnes-Mares are its Grand Cru vineyards. The wines are delicate with violet and red fruit aromas.' },
  { q: 'What is Vosne-Romanee and why is it important?', a: 'Vosne-Romanee houses some of Burgundy\'s greatest Grand Crus including Romanee-Conti, La Tache, Richebourg and Romanee-St-Vivant. The wines are complex, silky and can age for decades.' },
  { q: 'Name five Grand Cru vineyards of the Cote de Nuits.', a: 'Chambertin, Musigny, Bonnes-Mares, Clos de Vougeot, Romanee-Conti, La Tache, Richebourg and Echezeaux are among the most famous.' },
  { q: 'What is the difference between Corton and Corton-Charlemagne?', a: 'Both are Grand Cru vineyards straddling Aloxe-Corton, Pernand-Vergelesses and Ladoix. Corton is for red wine (Pinot Noir). Corton-Charlemagne is for white wine (Chardonnay) and is highly prized.' },
  { q: 'What is Puligny-Montrachet famous for?', a: 'Puligny-Montrachet is considered the source of the world\'s greatest dry white wines. Its Grand Crus include Montrachet, Chevalier-Montrachet and Batard-Montrachet. The wines have great richness combined with precision and minerality.' },
  { q: 'What distinguishes village-level Burgundy from Premier Cru?', a: 'Village-level wines use only the commune name (e.g. Gevrey-Chambertin). Premier Cru wines add the vineyard name (e.g. Gevrey-Chambertin Clos St-Jacques). Premier Cru comes from superior named sites with stricter rules.' },
  { q: 'What is Pouilly-Fuisse?', a: 'A prestigious white wine appellation in the Maconnais, producing richer and more complex Chardonnay than basic Macon. Premiers Crus were established in 2020. The wines can be mineral, buttery and quite full.' },

  // Advanced Bordeaux
  { q: 'What distinguishes the soils of the Left Bank from the Right Bank of Bordeaux?', a: 'Left Bank soils are predominantly gravel and sand, draining freely and warming quickly, favouring Cabernet Sauvignon. Right Bank soils are more clay and limestone, retaining moisture and warmth, favouring Merlot and Cabernet Franc.' },
  { q: 'What distinguishes Pauillac from St-Julien stylistically?', a: 'Pauillac produces the most powerful, structured and long-lived Left Bank wines with cassis, cedar and cigar box notes. St-Julien is more consistent and elegant with better balance between power and finesse.' },
  { q: 'What makes St-Estephe distinct from other Left Bank appellations?', a: 'St-Estephe has a higher proportion of clay in its soils, giving wines more tannic structure, higher acidity, firm texture and sometimes earthy notes. The wines often need longer cellaring than wines from Pauillac.' },
  { q: 'What is the role of Petit Verdot and Cabernet Franc in Bordeaux blends?', a: 'Petit Verdot adds deep colour, tannin and violet aromas but ripens late so is used sparingly. Cabernet Franc adds floral perfume, green pepper notes, freshness and earlier ripening, particularly important on the Right Bank.' },
  { q: 'What is en primeur and how does it work?', a: 'En primeur (wine futures) allows buyers to purchase Bordeaux wine while it is still in barrel, typically 18 months before bottling. Buyers pay now and receive the wine later, hoping the investment will increase in value.' },
  { q: 'What is the negociant system in Bordeaux?', a: 'Negociants are wine merchants who buy wine from chateaux or cooperatives, then blend, age, bottle and sell it under their own label. They play a central role in Bordeaux distribution globally.' },
  { q: 'What is a second wine in Bordeaux?', a: 'A second wine is a separate wine made from younger vines or declassified barrels of a classified chateau. It offers some of the chateau\'s character at a lower price. Examples include Carruades de Lafite and Les Forts de Latour.' },
  { q: 'What are the satellite appellations of St-Emilion?', a: 'Lussac-St-Emilion, Montagne-St-Emilion, Puisseguin-St-Emilion and St-Georges-St-Emilion. These villages can append the St-Emilion name to their appellation.' },
  { q: 'What makes Pomerol unique among Bordeaux appellations?', a: 'Pomerol has no official classification unlike St-Emilion or the Medoc. Its most famous wine Petrus commands some of the highest prices in the world. The clay plateau soils are uniquely suited to Merlot.' },
  { q: 'How does vintage variation affect Bordeaux?', a: 'Bordeaux\'s maritime climate means significant year-to-year variation. Great vintages require warm, dry summers and harvests. Poor vintages can produce dilute, underripe wines with elevated acidity. Recent warming has improved consistency.' },

  // Advanced Rhone
  { q: 'What distinguishes Hermitage from Crozes-Hermitage?', a: 'Hermitage is a single granite hill producing some of the Northern Rhone\'s most profound Syrah with exceptional depth, structure and longevity. Crozes-Hermitage surrounds it on flatter, mixed soils and produces wines at an approachable level.' },
  { q: 'What is Cote-Rotie and what makes it distinctive?', a: 'Cote-Rotie is a Northern Rhone appellation producing Syrah from steep, terraced granite slopes. It is one of the most complex and elegant expressions of Syrah with floral, spicy and meaty notes. Viognier may be co-fermented.' },
  { q: 'What is the role of Viognier co-fermented with Syrah in Cote-Rotie?', a: 'Up to 20% Viognier may be co-fermented with Syrah in Cote-Rotie. The Viognier enhances aromatic complexity, adds floral lift and helps fix colour. It does not lighten the wine despite being a white variety.' },
  { q: 'What is Cornas?', a: 'Cornas is a Northern Rhone appellation producing 100% Syrah on granite soils. The wines are very dark, tannic and powerful in youth but develop great complexity with age. It has no white wine production.' },
  { q: 'How does the Southern Rhone differ from the Northern Rhone climatically?', a: 'The Southern Rhone has a warmer, drier Mediterranean climate with more sunshine and the Mistral wind providing natural ventilation. This encourages blended wines with riper, richer character compared to the more restrained Northern Rhone single-variety wines.' },
  { q: 'What role do galets (large stones) play in Chateauneuf-du-Pape?', a: 'The large smooth stones absorb heat during the day and radiate it at night, helping grapes achieve full phenolic ripeness. They also aid drainage. However not all of the appellation is covered by galets and their importance is debated.' },

  // Advanced Germany
  { q: 'What makes Mosel Riesling distinctive from Rheingau Riesling?', a: 'Mosel Riesling is grown on steep slate slopes with low alcohol, high acidity and delicate, light-bodied styles with apricot and peach fruit. Rheingau Riesling on warmer loam and quartzite produces fuller, more powerful wines with greater structure.' },
  { q: 'What is Spatburgunder and how does it differ from Pinot Noir elsewhere?', a: 'Spatburgunder is Germany\'s name for Pinot Noir. Germany produces elegant, cool-climate expressions with red fruit, earthy notes and lower tannin than Burgundy, particularly in regions such as Baden, Ahr and Pfalz.' },
  { q: 'What are Grosse Gewachse (GG)?', a: 'Grosse Gewachse (Great Growths) are the VDP\'s dry wines from their top classified Grosse Lage (Grand Cru equivalent) vineyards. They represent Germany\'s finest dry expressions of Riesling and other varieties.' },
  { q: 'What is the VDP classification system?', a: 'The VDP uses a four-tier vineyard classification: Gutswein (estate), Ortswein (village), Erste Lage (First Growth, Premier Cru equivalent) and Grosse Lage (Grand Cru equivalent). It is independent of the official German wine law.' },
  { q: 'What is the Ahr region known for?', a: 'The Ahr is a small region in western Germany, one of the world\'s northernmost wine regions, known almost exclusively for Spatburgunder (Pinot Noir) produced on steep slate and volcanic soil slopes.' },

  // Advanced Italy
  { q: 'What are the key DOCG wines of Piedmont?', a: 'Barolo, Barbaresco, Barolo Chinato, Moscato d\'Asti, Asti Spumante, Gavi, Roero, Brachetto d\'Acqui, Barbera d\'Asti Superiore, Dolcetto di Dogliani Superiore and others.' },
  { q: 'What is the difference between Barolo and Barbaresco?', a: 'Both are made from Nebbiolo in Piedmont. Barolo must age for a minimum of 3 years (5 for Riserva) and is generally more powerful and tannic. Barbaresco must age for 2 years (4 for Riserva) and is considered more elegant and accessible.' },
  { q: 'What is Brunello di Montalcino and what are its ageing requirements?', a: 'Brunello di Montalcino is a DOCG wine from Montalcino in Tuscany made 100% from Sangiovese Grosso (Brunello). It must age a minimum of 5 years (6 for Riserva) including 2 years in oak and 4 months in bottle.' },
  { q: 'What is the Super Tuscan movement?', a: 'Super Tuscans were wines made outside the rules of the DOC system in Tuscany from the 1970s onwards, often using international varieties such as Cabernet Sauvignon and Merlot. They were classified as humble Vino da Tavola but commanded high prices.' },
  { q: 'What is Sassicaia and why is it significant?', a: 'Sassicaia is a Bolgheri estate producing a Cabernet Sauvignon-based wine that was a pioneering Super Tuscan. It was the first single-estate wine to receive its own DOC in Italy (Bolgheri Sassicaia DOC).' },
  { q: 'What is Ripasso and how is it made?', a: 'Ripasso is a Valpolicella wine that is re-fermented on the skins (pomace) left over from Amarone production. This adds richness, weight, dried fruit character and extra alcohol to the base Valpolicella.' },
  { q: 'What is Etna Rosso and what makes it distinctive?', a: 'Etna Rosso is a red wine from the volcanic slopes of Mount Etna in Sicily, made mainly from Nerello Mascalese. The volcanic soils, altitude and old vines produce wines of elegance, bright acidity and complexity, sometimes compared to Burgundy.' },
  { q: 'What is the difference between DOCG, DOC and IGT in Italy?', a: 'DOCG (Denominazione di Origine Controllata e Garantita) is the highest tier with strictest rules. DOC is the next tier. IGT (Indicazione Geografica Tipica) is the most flexible category, used by Super Tuscans and modern innovative wines.' },
  { q: 'What is Franciacorta and how does it compare to Champagne?', a: 'Franciacorta is a DOCG sparkling wine from Lombardy made by the Traditional Method from Chardonnay, Pinot Nero and Pinot Bianco. It is Italy\'s most serious sparkling wine and is often compared to Champagne for quality and complexity.' },
  { q: 'What is Vino Nobile di Montepulciano?', a: 'Vino Nobile di Montepulciano is a DOCG red wine from the hilltop town of Montepulciano in Tuscany, made mainly from Prugnolo Gentile (a Sangiovese clone). It is more structured than Chianti Classico and age-worthy.' },

  // Advanced Spain
  { q: 'What is the full classification system of Rioja?', a: 'Wines are classified by ageing: Joven (no ageing), Crianza, Reserva and Gran Reserva. Since 2018 a vineyard classification was added: Rioja Generica, Municipio (village), Vina Singular (single vineyard) and Vino de Zona (subzone: Rioja Alta, Alavesa, Oriental).' },
  { q: 'What distinguishes Rioja Alta from Rioja Alavesa and Rioja Oriental?', a: 'Rioja Alta has clay-limestone soils and cooler conditions producing more elegant, age-worthy wines. Rioja Alavesa (in Basque Country) has a maritime influence and thin limestone soils producing fresh, aromatic wines. Rioja Oriental is warmer and drier, producing fuller, riper wines often for blending.' },
  { q: 'What is Priorat and what gives its wines their character?', a: 'Priorat is a DOCa in Catalonia producing concentrated, powerful red wines mainly from old-vine Grenache and Carinena. The distinctive llicorella soils (black slate and quartz) force vines to dig deep, producing intense, mineral wines with very low yields.' },
  { q: 'What are the key styles of Sherry?', a: 'Fino and Manzanilla (pale, dry, biologically aged), Amontillado (amber, nutty, oxidatively aged), Oloroso (dark, rich, fully oxidative), Palo Cortado (between Amontillado and Oloroso), Cream (sweetened Oloroso) and Pedro Ximenez (extremely sweet).' },
  { q: 'Describe the production of Fino Sherry in detail.', a: 'Palomino grapes are pressed and fermented to dry. The wine is fortified to 15% alcohol. It is placed in the solera system in 600-litre butts. A yeast layer (flor) forms on the surface, protecting the wine from oxygen and imparting nutty, saline, aldehyde aromas. It must be refreshed regularly to maintain the flor.' },
  { q: 'What is the solera system in Sherry production?', a: 'A fractional blending system of stacked casks (criaderas). The oldest wine is in the bottom level (solera). When wine is drawn off for bottling, the space is topped up from the next oldest level, working up to the newest (sobretabla). No wine is ever fully drained, creating blended wines of consistent style.' },
  { q: 'What is VORS and VOS in Sherry?', a: 'VOS (Very Old Sherry) is certified as averaging at least 20 years in the solera. VORS (Very Old Rare Sherry) is certified as averaging at least 30 years. These terms apply only to Amontillado, Oloroso, Palo Cortado and PX.' },
  { q: 'What is Bierzo and what grape dominates it?', a: 'Bierzo is a DO in northwest Spain, dominated by the Mencia grape. The slate soils and Atlantic influence produce elegant, aromatic reds with red fruit, floral notes and firm but fine tannins, sometimes compared to Northern Rhone Syrah.' },
  { q: 'What is Rueda?', a: 'Rueda is a DO in Castile and Leon, Spain, producing dry white wines mainly from Verdejo. The wines are aromatic with citrus, fennel and herbal notes and good acidity, made fresh and unoaked or with some oak treatment.' },
  { q: 'What is Toro?', a: 'Toro is a small DO in northwest Spain producing powerful, concentrated reds from Tinta de Toro (a local Tempranillo clone). The extreme continental climate and old bush vines on sandy soils produce wines of great intensity and longevity.' },

  // Advanced Portugal
  { q: 'What are the main styles of Port?', a: 'Ruby styles: Ruby, Reserve, LBV, Vintage. Tawny styles: Tawny, Aged Tawny (10, 20, 30, 40-year), Colheita. White Port: from white varieties. Rose Port. Each reflects different ageing and blending approaches.' },
  { q: 'Describe Vintage Port and its ageing requirements.', a: 'Vintage Port is declared in exceptional years by individual quintas. It is aged for just 2 years in barrel before bottling unwashed and unfined. It develops in bottle for 10-40+ years, throwing significant sediment. It must be decanted.' },
  { q: 'What is the difference between 10, 20, 30 and 40-year-old Tawny Port?', a: 'These are blended averages, not single vintages. 10-year shows dried fruit and light nuttiness. 20-year is richer with walnut and orange peel. 30-year is complex and concentrated. 40-year approaches rancio character. All should be served chilled.' },
  { q: 'What are the four noble varieties of Madeira?', a: 'Sercial (driest), Verdelho (medium dry), Bual/Boal (medium rich) and Malmsey/Malvasia (richest and sweetest). Each produces a distinct style and the label usually indicates which grape was used.' },
  { q: 'What is the estufagem process in Madeira?', a: 'The commercial heating process for Madeira. Wine is placed in tanks fitted with heating coils and heated to around 45-50 degrees C for at least 90 days. This deliberately oxidises and caramelises the wine, giving it its distinctive character.' },
  { q: 'What is the canteiro method in Madeira?', a: 'The traditional, premium heating method for Madeira. Wine is aged in barrels placed in warm lofts beneath the roof, slowly heated by the sun over years or decades. This produces more complex, nuanced wines than estufagem.' },
  { q: 'What is Colheita Port?', a: 'A Colheita (meaning harvest or vintage) is a Tawny Port from a single year, aged for a minimum of 7 years in barrel before bottling. It shows the character of a specific year within an oxidatively aged, nutty style.' },

  // Natural wine and alternative winemaking
  { q: 'What is biodynamic farming and its key principles?', a: 'Biodynamic farming views the vineyard as a living organism. It prohibits synthetic inputs, uses herbal and mineral preparations (the 500 series) and follows a planting calendar based on lunar and cosmic rhythms. Certification is via Demeter or Biodyvin.' },
  { q: 'What is orange wine?', a: 'Orange wine is white wine made with extended skin contact (maceration), just like red wine. The skins give the wine a copper or orange hue, tannin, texture and oxidative notes. It is an ancient practice revived particularly in Georgia and Friuli.' },
  { q: 'What is a petillant naturel (pet-nat)?', a: 'Pet-nat is a sparkling wine made by the ancestral method. The wine is bottled before fermentation is complete, so the remaining CO2 is trapped, creating natural bubbles. The wine is unfiltered, hazy and often cloudy.' },
  { q: 'What is amphora winemaking?', a: 'Fermenting and/or ageing wine in clay vessels (amphorae or qvevri). Clay is porous allowing slow oxygen exchange and can impart a distinctive earthy, textured character. It is one of the world\'s oldest winemaking methods, especially traditional in Georgia.' },
  { q: 'What is spontaneous fermentation?', a: 'Fermentation using the wild yeasts naturally present on grape skins and in the winery environment, rather than adding commercial yeasts. It can produce greater complexity but is less predictable and may take longer.' },
  { q: 'What is carbonic maceration and what wines use it?', a: 'Whole uncrushed grapes placed in a CO2 atmosphere begin intracellular fermentation. Tannin and colour extraction is minimal but fresh red fruit and banana-like aromas are maximised. Used in Beaujolais and some Languedoc wines.' },

  // Wine faults
  { q: 'What is TCA (cork taint) and how does it present?', a: '2,4,6-Trichloroanisole is the main compound causing cork taint. It presents as damp cardboard, wet dog, musty cellar or mouldy basement aromas. Even tiny concentrations (parts per trillion) can suppress fruit and ruin a wine.' },
  { q: 'What is Brettanomyces and what aromas does it give?', a: 'Brettanomyces (brett) is a wild yeast that can colonise wine during barrel ageing. At low levels it can add complexity (barnyard, leather, spice). At high levels it becomes a fault with horse sweat, sticking plaster and rotten meat aromas.' },
  { q: 'What is volatile acidity (VA) and when is it a fault?', a: 'VA is mainly acetic acid, which gives a vinegar or nail varnish (ethyl acetate) aroma. At low levels it can add complexity. Above certain legal thresholds, or when it dominates, it is a fault.' },
  { q: 'What is reduction in wine and how is it treated?', a: 'Reduction occurs when insufficient oxygen during winemaking allows sulphur compounds to form, giving rotten egg, struck match or rubber aromas. It can often be resolved by aeration, decanting or splashing during pouring.' },
  { q: 'What is light strike and how does it affect wine?', a: 'Light strike occurs when wine is exposed to UV light, particularly in clear or pale-coloured bottles. It causes a range of off-aromas including cabbage, wet wool and burnt rubber. Dark green glass provides the best protection.' },
  { q: 'What is refermentation in bottle?', a: 'If a wine contains residual sugar or malic acid (in still wine), it can referment in bottle if exposed to yeast or bacteria. This produces CO2, haze, off-flavours and pressure, particularly noticeable as unwanted bubbles in still wines.' },
  { q: 'What causes mouse taint in wine?', a: 'Mouse taint is caused by certain lactic acid bacteria and Brettanomyces. It only manifests on the palate (not the nose), leaving an aftertaste of mouse cage, popcorn or crackers. It is more prevalent in natural wines.' },

  // Advanced winemaking
  { q: 'What is cold pre-fermentation maceration?', a: 'Keeping crushed grapes at very low temperatures before fermentation begins. This extracts colour and fruit aromas without tannin or alcohol extraction. Used to enhance fruit character in Pinot Noir and other varieties.' },
  { q: 'What is pumping over (remontage) versus punching down (pigeage) in red winemaking?', a: 'Remontage pumps fermenting juice from the bottom of the tank over the floating cap of skins. Pigeage manually or mechanically pushes the cap down into the juice. Both extract colour, tannin and flavour. Pigeage tends to be gentler.' },
  { q: 'What is delestage (rack and return)?', a: 'The entire fermenting juice is drained from the tank and the cap of skins is allowed to drain and compact, breaking up seeds. The juice is then pumped back over the cap. This is a more dramatic extraction technique than remontage.' },
  { q: 'What is the role of sulfur (SO2) in winemaking?', a: 'SO2 is an antioxidant and antimicrobial agent. It protects wine from oxidation and unwanted microbial activity. It can be added at harvest, during fermentation, at blending and at bottling. Total and free SO2 levels are regulated.' },
  { q: 'What is the difference between wild fermentation and commercial yeast fermentation?', a: 'Wild (indigenous) yeasts naturally present on grapes and in the winery produce more complex, unpredictable fermentations. Commercial yeast strains are selected for reliability, efficiency and specific flavour contributions. Many fine wine producers use wild fermentation.' },

  // Food and wine advanced
  { q: 'What is the concept of weight matching in food and wine pairing?', a: 'The body and intensity of the wine should match the richness and intensity of the food. A delicate fish dish suits a light white wine. A rich beef stew suits a full-bodied red. Mismatching causes one to overwhelm the other.' },
  { q: 'How does acidity in wine interact with food?', a: 'Acidity in wine cuts through fat and richness, refreshes the palate and balances creamy or oily foods. A wine should ideally be at least as acidic as the food it accompanies. Acidic foods make low-acid wines taste flat.' },
  { q: 'How does tannin interact with fat and protein?', a: 'Tannin binds to proteins and fats in food, softening its own astringency. This is why tannic red wines pair well with red meat, aged cheese and charcuterie, while they can taste harsh and bitter with fatty fish or delicate dishes.' },
  { q: 'What wine pairs with umami-rich foods?', a: 'Umami intensifies tannin and bitterness and reduces the perception of fruit. Wines with high acidity, low tannin and some residual sweetness work best. Try sparkling wine, dry roses or light reds with umami-rich dishes like mushrooms or aged parmesan.' },
  { q: 'What is the challenge of pairing wine with artichokes?', a: 'Artichokes contain cynarin, a compound that temporarily alters taste perception, making water and wine taste sweet. High-acid, low-tannin wines are most forgiving. Dry roses or crisp whites often work best.' },
  { q: 'What wines pair with blue cheese?', a: 'The classic pairing is Sauternes with Roquefort. The sweetness of the wine cuts the salt and richness of the cheese. Port and Stilton is another classic. Full-bodied sweet wines generally suit strong blue cheeses.' },

  // Tokaj and sweet wines
  { q: 'What is the Tokaj classification and what is Aszu?', a: 'Tokaj is a Hungarian wine region. Aszu is wine made from botrytis-affected (noble rot) berries collected individually. These are added in amounts measured in puttonyos (3-6 historically, now minimum 3 puttonyos) to a base wine, producing luscious sweet wines.' },
  { q: 'What is Tokaji Eszencia?', a: 'Eszencia is the free-run juice from botrytis-affected Aszu berries collected under their own weight. It has extraordinary sugar concentration (often over 500g/litre) and may contain only 2-3% alcohol. It is considered one of the world\'s rarest and most prized wines.' },
  { q: 'What is Vin Jaune from the Jura?', a: 'Vin Jaune (yellow wine) is made from Savagnin in Chateau-Chalon and other Jura appellations. It is aged under a flor-like veil (voile) of yeast in old barrels for a minimum of 6 years and 3 months. The result is nutty, oxidative and remarkably long-lived.' },
  { q: 'What is Rutherglen Muscat from Australia?', a: 'Rutherglen Muscat from Victoria is a unique Australian style of fortified wine made from overripe or sun-dried Muscat grapes. Long solera-style ageing produces concentrated, raisiny, coffee and toffee-flavoured wines of extraordinary richness.' },
  { q: 'What is Recioto della Valpolicella?', a: 'Recioto is a sweet red wine from Valpolicella in Veneto made using the appassimento (drying) method. If fermentation is allowed to go to dryness on the same dried grapes, the result is Amarone. Recioto retains residual sugar, producing a rich, sweet wine.' },

  // Business and trade
  { q: 'What is the difference between a negociant and a domaine in Burgundy?', a: 'A domaine grows its own grapes and makes wine from its own vineyards. A negociant purchases grapes, must or wine from growers, blends, ages and sells wine under its own label. Some operate as both.' },
  { q: 'What is a cooperative winery?', a: 'A cooperative is owned and operated by a group of growers who pool their grapes and share winemaking facilities and costs. Cooperatives are important in regions such as Languedoc, Rhone and Germany, producing wines across a range of qualities.' },
  { q: 'What is fine wine investment?', a: 'Purchasing wines with the intention of selling them at a higher price in the future. Fine wines from Bordeaux, Burgundy, Champagne and other prestigious regions can appreciate significantly. Investment is managed through auction houses, merchants and specialist funds.' },
  { q: 'What is the secondary wine market?', a: 'The market for buying and selling wine that has already been purchased at least once, through auction houses, private sales or specialist merchants. It allows access to old vintages and wines no longer available from the producer.' },

  // Advanced viticulture
  { q: 'What is Guyot training?', a: 'Guyot is a vine training system where one or two canes (arms) are trained horizontally along a wire. Simple Guyot has one cane, Double Guyot has two. It is the most widely used system in fine wine regions and allows precise yield control.' },
  { q: 'What is gobelet (bush vine) training?', a: 'Bush vines are free-standing, pruned to short spurs without wires or trellises. They are traditional in hot, dry regions such as Southern Rhone, Beaujolais and old Barossa. Old bush vines self-shade and naturally limit yield, often producing concentrated wines.' },
  { q: 'Why does vine age matter in wine quality?', a: 'Older vines have deeper root systems, accessing water and nutrients from greater depth. They naturally produce smaller yields with more concentrated fruit. Old vine wines often show greater complexity, minerality and consistency, though there is no official minimum age definition.' },
  { q: 'What is the effect of yield on wine quality?', a: 'Lower yields generally concentrate flavours, sugar, acid and phenolics in fewer grapes, potentially improving quality. However very low yields can sometimes lead to over-concentration. Higher yields tend to produce more dilute wines. Yield regulations vary by appellation.' },
  { q: 'What is selective harvesting (tries)?', a: 'Harvesting in multiple passes through the vineyard, selecting only grapes at the optimal ripeness at each pass. Essential for noble rot sweet wines and for achieving consistency across a large vineyard in uneven ripening conditions.' },

  // Advanced grapes
  { q: 'What are the three Pinots and how do they differ?', a: 'Pinot Noir is a red variety producing light, elegant reds. Pinot Gris/Grigio is a pink-skinned mutation producing fuller whites. Pinot Blanc is a further mutation producing lighter, less aromatic whites. All are thought to be natural mutations of the same original clone.' },
  { q: 'What is Gruner Veltliner and where is it from?', a: 'Gruner Veltliner is Austria\'s most important white grape, producing wines ranging from light and peppery (Pfeffer) to rich and complex. Its distinctive white pepper note is a hallmark, along with high acidity and good ageing potential.' },
  { q: 'What is Touriga Nacional?', a: 'Touriga Nacional is considered Portugal\'s finest red grape. It produces very dark, tannic, aromatic wines with violet, dark fruit and tar notes. It is the most prized variety in Port blends and increasingly used for dry wines in the Douro and Dao.' },
  { q: 'What is Zinfandel and where did it originate?', a: 'Zinfandel is California\'s signature grape, producing rich, powerful reds with bramble, black pepper and spice. DNA evidence shows it is genetically identical to Primitivo from Puglia, Italy, and Crljenak Kastelanski from Croatia.' },
  { q: 'What is Mourvedre (Monastrell) and what are its characteristics?', a: 'Mourvedre needs heat to ripen fully. It produces very dark, tannic, high-alcohol wines with meaty, gamey, dark fruit and earthy notes. It is an important component of Southern Rhone blends and also significant in Bandol and Spain.' },

  // Champagne advanced
  { q: 'Describe the differences between Vintage, NV and Prestige Cuvee Champagne.', a: 'NV blends multiple years for house consistency. Vintage uses only grapes from one exceptional year, aged longer with more complexity. Prestige Cuvee (e.g. Dom Perignon, Krug Grande Cuvee) uses the finest parcels with the longest ageing, representing the house at its highest level.' },
  { q: 'What is autolysis and how does it affect Champagne?', a: 'Autolysis is the breakdown of dead yeast cells (lees) during ageing on the lees. It releases compounds that add brioche, toast, biscuit and creamy texture to the wine. More pronounced lees contact (achieved through longer ageing) produces greater autolytic character.' },
  { q: 'What are the sweetness categories for Champagne dosage?', a: 'From driest to sweetest: Brut Nature/Zero Dosage (0-3g/L), Extra Brut (0-6g/L), Brut (0-12g/L), Extra Sec/Extra Dry (12-17g/L), Sec (17-32g/L), Demi-Sec (32-50g/L), Doux (50g/L+).' },
  { q: 'What makes Champagne Grand Cru villages different from Premier Cru?', a: 'Champagne uses the Echelle des Crus (scale of growths) to classify villages by grape quality. Grand Cru villages (17 in total) receive a 100% price scale. Premier Cru villages (44 in total) receive 90-99%. This affects the price paid for grapes.' },
  { q: 'What is a recemment degorge (RD) or Late Disgorged Champagne?', a: 'A Champagne that has been aged on its lees for significantly longer than usual before disgorgement. The extended contact with yeast lees adds greater richness, complexity and autolytic character. The disgorgement date appears on the label.' },

  // How to assess ageing potential
  { q: 'How do you assess the ageing potential of a wine?', a: 'Look for: high acidity (preserves freshness), significant tannin (in reds, acts as antioxidant), concentration and extract, quality of fruit, low sulphur exposure, good balance and the overall structural framework. Great wines need all components in balance to age gracefully.' },
  { q: 'What is the difference between a fortified wine and a dessert wine?', a: 'Fortified wine has grape spirit added to raise alcohol (Port, Sherry, Madeira). Dessert wine is sweet through concentration of natural sugar (Sauternes, TBA, Recioto) without added spirit. All fortified sweet wines are also dessert wines but not vice versa.' },
  { q: 'What is the French AOC/AOP system and how does it work?', a: 'AOC (Appellation d\'Origine Controlee) or AOP (Appellation d\'Origine Protegee) is France\'s quality wine classification system. Each appellation has legally defined boundaries, permitted grape varieties, maximum yields, minimum alcohol levels and winemaking practices.' },
  { q: 'What is the Spanish DO and DOCa system?', a: 'DO (Denominacion de Origen) is Spain\'s main quality classification, similar to the French AOC. DOCa (Denominacion de Origen Calificada) is the highest tier, requiring wines to meet stricter standards and be bottled within the region. Only Rioja and Priorat hold DOCa status.' },
  { q: 'What is the Champagne region\'s echelle des crus?', a: 'A historical price-setting system that rated villages on a scale of 80-100%. Grand Cru villages received 100%, Premier Cru 90-99% and other villages less. It determined what percentage of the official grape price producers paid growers. Although the official price scale is no longer used, the village classifications remain.' },
]

};
