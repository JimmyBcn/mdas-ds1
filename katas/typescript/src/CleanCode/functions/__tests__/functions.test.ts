/**
 * Tests para el concepto de Functions en Clean Code
 * Valida tanto las implementaciones malas como las buenas
 */

import { UserScoreProcessor as UserScoreProcessorBad, User } from "../functions-bad";
import { UserScoreProcessor as UserScoreProcessorGood } from "../functions-good";

describe("Functions - Bad Implementation", () => {
  let processor: UserScoreProcessorBad;
  let user: User;

  beforeEach(() => {
    processor = new UserScoreProcessorBad();
    user = { name: "Alex", score: 100 };
  });

  test("should process score with fast time bonus", () => {
    processor.processUserScore(user, 50, 30);
    // 100 + 50 + 10 (bonus) = 160
    expect(user.score).toBe(160);
  });

  test("should process score without bonus for slow time", () => {
    processor.processUserScore(user, 50, 90);
    // 100 + 50 = 150
    expect(user.score).toBe(150);
  });

  test("should process score at exact threshold boundary", () => {
    processor.processUserScore(user, 50, 60);
    // 100 + 50 = 150 (no bonus at threshold)
    expect(user.score).toBe(150);
  });
});

describe("Functions - Good Implementation", () => {
  let processor: UserScoreProcessorGood;
  let user: User;

  beforeEach(() => {
    processor = new UserScoreProcessorGood();
    user = { name: "Alex", score: 100 };
  });

  test("should process score with fast time bonus", () => {
    processor.processUserScore(user, 50, 30);
    // 100 + 50 + 10 (bonus) = 160
    expect(user.score).toBe(160);
  });

  test("should process score without bonus for slow time", () => {
    processor.processUserScore(user, 50, 90);
    // 100 + 50 = 150
    expect(user.score).toBe(150);
  });

  test("should process score at exact threshold boundary", () => {
    processor.processUserScore(user, 50, 60);
    // 100 + 50 = 150 (no bonus at threshold)
    expect(user.score).toBe(150);
  });

  test("should handle zero new score", () => {
    processor.processUserScore(user, 0, 30);
    // 100 + 0 + 10 (bonus) = 110
    expect(user.score).toBe(110);
  });

  test("should handle negative new score", () => {
    processor.processUserScore(user, -20, 90);
    // 100 + (-20) = 80
    expect(user.score).toBe(80);
  });
});
