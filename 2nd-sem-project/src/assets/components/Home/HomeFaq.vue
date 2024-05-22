<template>
    <div class="accordion-container">
        <h2>FAQ</h2>
        <div class="accordion">
            <div class="faq">
                <input type="checkbox" id="section-1" class="accordion-input">
                <label for="section-1" class="accordion-label">
                    <p>What is Fantasy Quest Esbjerg?</p>
                </label>
                <div class="accordion-content">
                    <p>Fantasy Quest Esbjerg is an immersive, magical experience that blends theater, role-playing,
                        and the timeless battle between good and evil. Participants embark on a quest filled with
                        challenges and puzzles, meeting magical creatures and characters along the way.</p>
                </div>
            </div>
            <div class="faq">
                <input type="checkbox" id="section-2" class="accordion-input">
                <label for="section-2" class="accordion-label">
                    <p>Who can participate?</p>
                </label>
                <div class="accordion-content">
                    <p>The quest is designed for families and friends. The Family Quest is suitable for participants
                        aged 7 and up, while the Evening Quest is geared towards those who enjoy solving complex
                        puzzles and mysteries.</p>
                </div>
            </div>
            <div class="faq">
                <input type="checkbox" id="section-3" class="accordion-input">
                <label for="section-3" class="accordion-label">
                    <p>What is the story behind Fantasy Quest Esbjerg?</p>
                </label>
                <div class="accordion-content">
                    <p>The story revolves around the legend that evil would come from the sea. In 1995, the sorcerer
                        Gygaz the Wise created a magical defense, incorporating four heroes into the statues "Man by
                        the Sea" to guard Esbjerg. When mysterious events start to happen, the statues awaken,
                        calling for heroes to help fight the emerging evil and close the portals to other worlds.
                    </p>
                </div>
            </div>
            <div class="faq">
                <input type="checkbox" id="section-4" class="accordion-input">
                <label for="section-4" class="accordion-label">
                    <p>What should I bring to the quest?</p>
                </label>
                <div class="accordion-content">
                    <p>Bring comfortable clothing, suitable for walking around the streets of Esbjerg. If you choose
                        to dress up, ensure your costume is practical for movement and weather conditions.</p>
                </div>
            </div>
            <div class="faq">
                <input type="checkbox" id="section-5" class="accordion-input">
                <label for="section-5" class="accordion-label">
                    <p>What's the difference between the quests? Can I join both?</p>
                </label>
                <div class="accordion-content">
                    <p>The Family Quest is designed for families with children aged 7 and up, featuring easier tasks
                        that kids can help solve. The Evening Quest, designed by Dystopia, is more challenging and
                        scary, perfect for those who enjoy a tougher, more thrilling adventure. Yes, you can join
                        both quests, but you will need to purchase separate tickets for each.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="grey-torn-paper-top"></div>
</template>
<script setup>
</script>
<style scoped>
.accordion-container {
    width: 100%;
    height: auto;
    background-color: var(--light-papirus);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 64px 0;
}

.accordion-container h2 {
    color: var(--gold-color);
    margin: 64px 0 16px 0;
    text-align: center;
}

.accordion {
    width: 1120px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 360px;
    }
}

.accordion-label,
.accordion-content {
    padding: 14px 20px;
}

.accordion-label {
    display: block;
    color: var(--light-papirus);
    background-color: var(--gold-color);
    font-weight: bold;
    cursor: pointer;
    position: relative;
    transition: background-color 0.1s;
    margin-top: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 768px) {
        height: auto;
    }
}

.accordion-label:hover {
    background-color: var(--gold-hover);
}

label:hover {
    cursor: pointer;
}

.accordion-content {
    background-color: var(--gold-color);
    color: var(--light-papirus);
    line-height: 1.6;
    font-size: 0.85em;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.5s ease, opacity 0.5s ease;
}

.accordion-input {
    display: none;
}

.accordion-input:checked ~ .accordion-content {
    max-height: 1000px;
    opacity: 1;
}
</style>
