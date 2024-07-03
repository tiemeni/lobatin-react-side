import { Box, FormControl, FormLabel, Select, Text, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import { initialStepType } from '../../contexts/StepContext';
import { useTranslation } from "react-i18next";
import * as React from 'react'

const _this = 'STEP-1';
const _subThis = 'STEP-1-0';

export const DonneesPiecesForm = () => {
  const { settings } = useSettingsContext();
  const { setActiveStep, steps, setStep } = useStepContext();
  const { t } = useTranslation();
  const isError = true

  return (
      <Box
        display={'flex'}
        className={'fade-out'}
        flexDirection={'column'}
        width={'100%'}
      >
        {/* {JSON.stringify(steps)} */}
        <Text fontSize="lg" ml={10} mt={-20}>
          {t('steper-2-0.titre')}
        </Text>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <FormControl width={'45%'} mt={10} isInvalid={isError ? false : !steps[_this].payload[_subThis]?.materiaux_plafond}>
            <FormLabel>{t('steper-2-0.materiaux-plafond')}<span style={{color:'red'}}>*</span></FormLabel>
            <Select
              value={steps[_this].payload[_subThis]?.materiaux_plafond}
              onChange={(e) => {
                let ancian = steps;
                ancian[_this].payload[_subThis]['materiaux_plafond'] =
                  e.target.value;
                setStep({ ...ancian });
              }}
            >
              <option>{t('common.select')}</option>
              <option value="Plafond intérieur en contre-plaqué à peindre ou à vernir">{t('steper-2-0.section-plafond.val-1')}</option>
              <option value="Plafond extérieur en tôle Alu">{t('steper-2-0.section-plafond.val-2')}</option>
              <option value="Dalle en béton">{t('steper-2-0.section-plafond.val-3')}</option>
              <option value="Plafond intérieur en Lambris">{t('steper-2-0.section-plafond.val-4')}</option>
              <option value="Plafond extérieur en tôle lisse prélaquée">{t('steper-2-0.section-plafond.val-5')}</option>
              {/* <option value="Couche d'air intra-plafond">{t('steper-1.section-materiaux-toit.val-6')}</option> */}
            </Select>
          </FormControl>

          <FormControl ml={'3%'} width={'45%'} mt={10} isInvalid={isError ? false : !steps[_this].payload[_subThis]['revetement_interieur_mur']}>
            <FormLabel>{t('steper-2-0.revetement-int')} <span style={{color:'red'}}>*</span></FormLabel>
            <Select
              value={steps[_this].payload[_subThis]?.revetement_interieur_mur}
              onChange={(e) => {
                let ancian = steps;
                ancian[_this].payload[_subThis]['revetement_interieur_mur'] =
                  e.target.value;
                setStep({ ...ancian });
              }}
            >
              <option>{t('common.select')}</option>
              <option value="Peinture noire">{t('steper-2-0.section-revetement.val-3')}</option>
              <option value="Peinture blanche">{t('steper-2-0.section-revetement.val-4')}</option>
              <option value="Peinture bleue">{t('steper-2-0.section-revetement.val-5')}</option>
              <option value="Peinture grise métallisée (métaux : fer,aluminium…)">{t('steper-2-0.section-revetement.val-6')}</option>
              <option value="Peinture verte">{t('steper-2-0.section-revetement.val-8')}</option>
              <option value="Aucun">{t('steper-2-0.section-revetement.val-8')}</option>
            </Select>

          </FormControl>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <FormControl width={'45%'} mt={10} isInvalid={isError ? false : !steps[_this].payload[_subThis]['revetement_sol']}>
            <FormLabel>{t('steper-2-0.revetement-sol')}  <span style={{color:'red'}}>*</span></FormLabel>
            <Select
              value={steps[_this].payload[_subThis]?.revetement_sol}
              onChange={(e) => {
                let ancian = steps;
                ancian[_this].payload[_subThis]['revetement_sol'] =
                  e.target.value;
                setStep({ ...ancian });
              }}
            >
              <option>{t('common.select')}</option>
              <option value="Dalle de beton + carreaux">{t('steper-1.section-materiaux-sol.val-1')}</option>
              <option value="Sol cimente simple">{t('steper-1.section-materiaux-sol.val-2')}</option>
              <option value="Sol en terre simple">{t('steper-1.section-materiaux-sol.val-3')}</option>
            </Select>

          </FormControl>

          <FormControl ml={'3%'} width={'45%'} mt={10} isInvalid={isError ? false : !steps[_this].payload[_subThis]['revetement_exterieur_mur']}>
            <FormLabel>{t('steper-2-0.revetement-ext')} <span style={{color:'red'}}>*</span></FormLabel>
            <Select
              value={steps[_this].payload[_subThis]?.revetement_exterieur_mur}
              onChange={(e) => {
                let ancian = steps;
                ancian[_this].payload[_subThis]['revetement_exterieur_mur'] =
                  e.target.value;
                setStep({ ...ancian });
              }}
            >
              <option>{t('common.select')}</option>
              <option value="Peinture noire">
            {t('steper-2-2.couleur_text.val-1')}
            </option>
            <option value="Peinture blanche">{t('steper-2-2.couleur_text.val-2')}</option>
            <option value="Peinture bleue">{t('steper-2-2.couleur_text.val-3')}</option>
            <option value="Peinture grise métallisée (métaux : fer,aluminium…)">{t('steper-2-2.couleur_text.val-4')}</option>
            {/* <option value="Verre">{t('steper-2-2.couleur_text.val-5')}</option> */}
            <option value="Peinture verte">{t('steper-2-2.couleur_text.val-6')}</option>
            </Select>

          </FormControl>
        </Box>

        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        ></Box>
      </Box>
  );
};
