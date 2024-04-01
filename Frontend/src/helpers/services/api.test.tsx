import { loginAPI, getProfileAPI, editUserNameAPI } from "./api";
import fetchMock from "jest-fetch-mock";

/**
 * loginAPI
 */
describe("loginAPI function", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should call loginAPI with correct parameters", async () => {
    const mockResponse = true;
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await loginAPI("test@example.com", "password123");

    expect(result).toEqual(mockResponse);
  });

  it("should handle errors in loginAPI", async () => {
    fetchMock.mockRejectOnce(new Error("API Error"));
    console.log = jest.fn();
    const response = await loginAPI("test@example.com", "password123");
    expect(response).toBe(!status);
    expect(console.log).toHaveBeenCalledWith(
      expect.any(Error),
      "error in the backend"
    );
  });
});
/**
 * getProfileAPI
 */
describe("getProfileAPI function", () => {
  beforeEach(() => {
    loginAPI("test@example.com", "password123");
  });

  it("should call getProfileAPI with correct parameters", async () => {
    const mockResponse = { profile: { name: "John" } };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const response = await getProfileAPI("tokensssm");

    expect(response).toBe(undefined);
  });

  it("should handle errors in getProfileAPI", async () => {
    fetchMock.mockRejectOnce(new Error("API Error"));
    console.log = jest.fn();

    const response = await getProfileAPI("tokensssm");

    expect(response).toBeUndefined();
    expect(console.log).toHaveBeenCalledWith(
      expect.any(Error),
      "error in getProfileAPI"
    );
  });
});
/**
 * editUserNameAPI
 */
describe("editUserNameAPI function", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should call editUserNameAPI with correct parameters", async () => {
    const mockResponse = { success: true };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const response = await editUserNameAPI("tokensssm", "John", "Doe");

    expect(response).toEqual(undefined);
  });

  it("should handle errors in editUserNameAPI", async () => {
    fetchMock.mockRejectOnce(new Error("API Error"));
    console.log = jest.fn();
    const response = await editUserNameAPI(
      "test@example.com",
      "password123",
      "token1234"
    );
    expect(response).toBe(undefined);
    expect(console.log).toHaveBeenCalledWith(
      expect.any(Error),
      "error in editUserNameAPI"
    );
  });
});
