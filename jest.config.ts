import { getJestProjects } from '@nx/jest';
import { Config } from 'jest';

const rootJestConfig: Config = {
  projects: getJestProjects(),
};

export default rootJestConfig;
