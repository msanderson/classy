export interface IClassPortal {

    /**
     * For a given commitUrl, figure out what the default deliverable is at the current time.
     *
     * @param commitUrl
     */
    getDefaultDeliverableId(commitUrl: string): Promise<string | null>;

    /**
     * Is the user staff on the course.
     *
     * @param courseId
     * @param userName
     */
    isStaff(courseId: string, userName: string): Promise<boolean>;

    /**
     * Gets the delay period (in seconds) between AutoTest invocations.
     *
     * Currently assumes the delay is constant across all deliverables.
     *
     * @param courseId
     */
    getTestDelay(courseId: string): Promise<number>;
}

export class DummyClassPortal implements IClassPortal {

    public async isStaff(courseId: string, userName: string): Promise<boolean> {
        return userName === "staff" || userName === "cs310"; // TODO: implement
    }

    public async getDefaultDeliverableId(commitUrl: string): Promise<string | null> {
        return "d1"; // TODO: implement
    }

    /**
     * Gets the delay beween test executions in milliseconds
     *
     * @param {string} courseId
     * @returns {Promise<number>}
     */
    public async getTestDelay(courseId: string): Promise<number> {
        return 12 * 60 * 60 * 1000; // 12h right now // TODO: implement
    }
}
