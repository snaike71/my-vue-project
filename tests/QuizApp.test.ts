import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import QuizApp from '../src/components/QuizApp.vue';

describe('QuizApp.vue', () => {
    it('démarre avec un score de zéro', () => {
        const wrapper = mount(QuizApp);
        expect(wrapper.vm.score).toBe(0);
    });

    it('incrémente le score après une bonne réponse', async () => {
        const wrapper = mount(QuizApp);

        // Simule une réponse correcte
        await wrapper.vm.handleAnswer('Paris');
        
        

        expect(wrapper.vm.score).toBe(1);
        expect(wrapper.vm.feedback).toBe('Bonne réponse !');
    });
});
