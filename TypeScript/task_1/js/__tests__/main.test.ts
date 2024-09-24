import { Teacher } from '../main';
import { Directors } from '../main';

describe('Teacher Interface', () => {
    it('should create a teacher object', () => {
        const teacher: Teacher = {
            firstName: "Jane",
            lastName: "Smith",
            fullTimeEmployee: true,
            location: "Los Angeles",
            contract: false,
        };

        expect(teacher.firstName).toBe("Jane");
        expect(teacher.lastName).toBe("Smith");
        expect(teacher.fullTimeEmployee).toBe(true);
        expect(teacher.location).toBe("Los Angeles");
        expect(teacher.contract).toBe(false);
    });
});

describe('Directors Interface', () => {
    it('should create a directors object', () => {
        const director1: Directors = {
            firstName: 'John',
            lastName: 'Doe',
            location: 'London',
            fullTimeEmployee: true,
            numberOfReports: 17,
        };

        expect(director1.firstName).toBe('John');
        expect(director1.lastName).toBe('Doe');
        expect(director1.location).toBe('London');
        expect(director1.fullTimeEmployee).toBe(true);
        expect(director1.numberOfReports).toBe(17);
    });
});
