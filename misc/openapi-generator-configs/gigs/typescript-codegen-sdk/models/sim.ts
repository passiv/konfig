/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type sim = {
    /**
     * Type of object is always `sim`.
     */
    object: string;
    /**
     * Unique identifier for the SIM.
     */
    id: string;
    /**
     * The ICCID (integrated circuit card identifier) associated with the SIM.
     */
    iccid: string;
    /**
     * The ID of the network provider of the SIM.
     */
    provider: string;
    /**
     * The status of the SIM. Can be `active` or `inactive`.
     */
    status: sim.status;
    /**
     * The type of the SIM. Can be `eSIM` or `pSIM`.
     */
    type: sim.type;
    /**
     * Time when the SIM was created.
     */
    createdAt: string;
};

export namespace sim {

    /**
     * The status of the SIM. Can be `active` or `inactive`.
     */
    export enum status {
        INACTIVE = 'inactive',
        ACTIVE = 'active',
        RETIRED = 'retired',
    }

    /**
     * The type of the SIM. Can be `eSIM` or `pSIM`.
     */
    export enum type {
        E_SIM = 'eSIM',
        P_SIM = 'pSIM',
    }


}

