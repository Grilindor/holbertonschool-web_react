import { Teacher } from '../main';

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
