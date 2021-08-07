import { expect } from 'chai';
import { describe, it } from 'mocha';
import Validation from '../src';

/* Tests */
describe('index.ts', (): void => {
    it('1. positive', async (): Promise<void> => {
        expect(Validation.positive(-1)).to.be.false;
        expect(Validation.positive(undefined)).to.be.true;
        expect(Validation.positive(1)).to.be.true;
    });

    it('2. hexColor', async (): Promise<void> => {
        expect(Validation.hexColor('#XXXXXX')).to.be.false;
        expect(Validation.hexColor(undefined)).to.be.true;
        expect(Validation.hexColor('#000000')).to.be.true;
    });

    it('3. url', async (): Promise<void> => {
        expect(Validation.url('fail url')).to.be.false;
        expect(Validation.url(undefined)).to.be.true;
        expect(Validation.url('https://test.com')).to.be.true;
    });

    it('4. uri', async (): Promise<void> => {
        expect(Validation.uri('fail')).to.be.false;
        expect(Validation.uri(undefined)).to.be.true;
        expect(Validation.uri('/test')).to.be.true;
    });

    it('5. isoCode', async (): Promise<void> => {
        expect(Validation.isoCode('FAIL')).to.be.false;
        expect(Validation.isoCode(undefined)).to.be.true;
        expect(Validation.isoCode('BRA')).to.be.true;
    });

    it('6. cpf', async (): Promise<void> => {
        expect(Validation.cpf('000.000.000-00')).to.be.false;
        expect(Validation.cpf(undefined)).to.be.true;
        expect(Validation.cpf('102.774.730-20')).to.be.true;
    });

    it('7. cnpj', async (): Promise<void> => {
        expect(Validation.cnpj('00.000.000/0000-00')).to.be.false;
        expect(Validation.cnpj(undefined)).to.be.true;
        expect(Validation.cnpj('72.621.728/0001-41')).to.be.true;
    });

    it('8. telephone', async (): Promise<void> => {
        expect(Validation.telephone('invalid')).to.be.false;
        expect(Validation.telephone(undefined)).to.be.true;
        expect(Validation.telephone('(19) 9999-9999')).to.be.true;
    });

    it('9. cellphone', async (): Promise<void> => {
        expect(Validation.cellphone('invalid')).to.be.false;
        expect(Validation.cellphone(undefined)).to.be.true;
        expect(Validation.cellphone('(19) 99999-9999')).to.be.true;
    });

    it('10. email', async (): Promise<void> => {
        expect(Validation.email('invalid')).to.be.false;
        expect(Validation.email(undefined)).to.be.true;
        expect(Validation.email('test@test.com')).to.be.true;
    });

    it('11. cep', async (): Promise<void> => {
        expect(Validation.cep('invalid')).to.be.false;
        expect(Validation.cep(undefined)).to.be.true;
        expect(Validation.cep('10.000-000')).to.be.true;
    });

    it('12. fullName', async (): Promise<void> => {
        expect(Validation.fullName('invalid')).to.be.false;
        expect(Validation.fullName(undefined)).to.be.true;
        expect(Validation.fullName('Full Name')).to.be.true;
    });

    it('13. creditCard', async (): Promise<void> => {
        expect(Validation.creditCard('invalid')).to.be.false;
        expect(Validation.creditCard(undefined)).to.be.true;
        expect(Validation.creditCard('5127177324002420')).to.be.true;
    });

    it('14. futureDate', async (): Promise<void> => {
        const past: Date = new Date();
        // eslint-disable-next-line no-magic-numbers
        past.setTime(past.getTime() - 1000);

        const future: Date = new Date();
        // eslint-disable-next-line no-magic-numbers
        future.setTime(future.getTime() + 1000);

        expect(Validation.futureDate(undefined)).to.be.true;
        expect(Validation.futureDate(past)).to.be.false;
        expect(Validation.futureDate(future)).to.be.true;
    });
});
