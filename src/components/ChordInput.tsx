import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { degree_to_name, name_to_degree } from '@/chorder/degree';
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useChordContext } from '@/contexts/ChordContext';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const InputTypeEnum = {
    DEGREE: 'degree',
    NAME: 'name'
};

const InputTypeToggle = ({ inputType, onInputTypeChange }: { inputType: string, onInputTypeChange: (type: string) => void }) => {
    const { t } = useTranslation();
    
    const inputTypeOptions = [
        { value: InputTypeEnum.DEGREE, label: t('inputType.byDegree') },
        { value: InputTypeEnum.NAME, label: t('inputType.byName') }
    ];
    
    return (
        <div className="flex w-fit rounded-md bg-gray-200 p-1 dark:bg-[#222]">
            {inputTypeOptions.map((option) => (
                <button 
                    key={option.value}
                    className="relative w-fit px-4 py-2 text-sm font-semibold text-foreground transition-colors"
                    onClick={() => onInputTypeChange(option.value)}
                >
                    <span className="relative z-10">{option.label}</span>
                    {inputType === option.value && (
                        <span className="absolute inset-0 z-0 rounded-md bg-background shadow-sm" style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}></span>
                    )}
                </button>
            ))}
        </div>
    );
};

const KeySelect = ({ selectedKey, onKeyChange }: { selectedKey: string, onKeyChange: (key: string) => void }) => {
    const { t } = useTranslation();
    
    const availableKeys = [
        { value: 'C', label: t('keySelect.C') },
        { value: 'G', label: t('keySelect.G') },
        { value: 'D', label: t('keySelect.D') },
        { value: 'A', label: t('keySelect.A') },
        { value: 'E', label: t('keySelect.E') }
    ];
    
    return (
        <Select 
            value={selectedKey}
            onValueChange={onKeyChange}
        >
            <SelectTrigger className="w-auto min-w-32">
                <SelectValue placeholder={t('keySelect.placeholder')} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {availableKeys.map(key => (
                        <SelectItem key={key.value} value={key.value}>
                            {key.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

const ChordPresetSelect = ({ onPresetSelected }: { onPresetSelected: (preset: string) => void }) => {
    const { t } = useTranslation();
    
    const availableChordPresets = [
        { value: '1 6 4 5', label: t('chordPresets.1645') },
        { value: '1 6 2 5', label: t('chordPresets.1625') },
        { value: '1 5 6 3 4 1 2 5', label: t('chordPresets.canon') },
        { value: '4 5 3 6 2 5 1', label: t('chordPresets.4536251') },
        { value: '1 5 6 4', label: t('chordPresets.1564') },
        { value: '6 4 1 5', label: t('chordPresets.6415') },
    ];
    
    return (
        <Select
            value={''}
            onValueChange={onPresetSelected}
        >
            <SelectTrigger className="w-auto min-w-32">
                <SelectValue placeholder={t('chordPresets.placeholder')} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {availableChordPresets.map(preset => (
                        <SelectItem key={preset.value} value={preset.value}>
                            {preset.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

const ChordInput = () => {
    const { t } = useTranslation();
    const [selectedKey, setSelectedKey] = useState('C');
    const [inputType, setInputType] = useState(InputTypeEnum.DEGREE);
    const [chordDescription, setChordDescription] = useState('4 5 3 6 2 5 1');
    const { setChordNames } = useChordContext();
    const { toast } = useToast();
    
    const updateChordNames = (selectedKey: string, inputType: string, chordDescription: string) => {
        if (!chordDescription.trim()) {
            setChordNames([]);
            return;
        }

        if (inputType === InputTypeEnum.DEGREE) {
            const degreeChordNames = chordDescription
                .trim()
                .split(/\s+/)
                .map((degreeChord: string) => degreeChord.trim())
                .filter((degreeChord: string) => degreeChord !== '');
            const nameChordNames = degreeChordNames.map((degreeChord: string) => degree_to_name(selectedKey, degreeChord));
            setChordNames(nameChordNames);
        } else {
            const nameChordNames = chordDescription
                .trim()
                .split(/\s+/)
                .map((nameChord: string) => nameChord.trim())
                .filter((nameChord: string) => nameChord !== '');
            setChordNames(nameChordNames);
        }
    };

    useEffect(() => {
        // Initial call to update context with default chord names array
        updateChordNames(selectedKey, inputType, chordDescription);
    }, []);

    const handleKeyChange = (key: string) => {
        setSelectedKey(key);
        updateChordNames(key, inputType, chordDescription);
    };

    const handleInputTypeChange = (type: string) => {
        setInputType(type);
        let newChordDescription = '';
        if (type === InputTypeEnum.DEGREE) {
            newChordDescription = chordDescription
                .trim()
                .split(/\s+/)
                .map((nameChord: string) => name_to_degree(selectedKey, nameChord))
                .join(' ');
        } else {
            newChordDescription = chordDescription
                .trim()
                .split(/\s+/)
                .map((degreeChord: string) => degree_to_name(selectedKey, degreeChord))
                .join(' ');
        }
        setChordDescription(newChordDescription);
        updateChordNames(selectedKey, type, newChordDescription);
    };

    const handleChordDescriptionChange = (description: string) => {
        setChordDescription(description);
        updateChordNames(selectedKey, inputType, description);
    };

    const handlePresetSelected = (preset: string) => {
        const newChordDescription = chordDescription + ' ' + preset;
        setChordDescription(newChordDescription);
        updateChordNames(selectedKey, inputType, newChordDescription);
    };

    const handleCopyChordDescription = () => {
        navigator.clipboard.writeText(chordDescription);
        toast({
            description: t('buttons.copySuccess'),
        });
    };

    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="w-full flex flex-row gap-2">
                <KeySelect 
                    selectedKey={selectedKey} 
                    onKeyChange={handleKeyChange} 
                />
            </div>
            <div className='w-full flex flex-row gap-2 items-center'>
                <div className="w-1/2 flex flex-row gap-2">
                    <InputTypeToggle 
                        inputType={inputType} 
                        onInputTypeChange={handleInputTypeChange} 
                    />
                </div>
                <div className="w-1/2 ml-auto flex flex-row-reverse gap-2 items-center">
                    <Button
                        variant="destructive"
                        className=""
                        onClick={() => handleChordDescriptionChange('')}
                    >
                        {t('buttons.clear')}
                    </Button>
                    <Button
                        variant="outline"
                        className=""
                        onClick={handleCopyChordDescription}
                    >
                        {t('buttons.copy')}
                    </Button>
                    <ChordPresetSelect 
                        onPresetSelected={handlePresetSelected}
                    />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <Textarea
                    className="p-2 text-base w-full h-auto min-h-28"
                    placeholder={t('textarea.placeholder')}
                    value={chordDescription} 
                    onChange={(e) => handleChordDescriptionChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ChordInput;