import React from 'react';
import { cn } from '@/lib/utils';

export interface FormattedTextProps extends React.HTMLAttributes<HTMLElement> {
  text?: string | string[];
  as?: React.ElementType;
  italicStyle?: string;
  accentColor?: string;
}

/**
 * FormattedText parses custom tags and renders them as styled HTML.
 * Supported tags:
 * [br] -> <br />
 * [bold]text[/bold] -> Bold white text
 * [italic]text[/italic] -> Italic span
 * [accent]text[/accent] -> Brand accent color text
 * [italic-style]text[/italic-style] -> Italic, opacity-80, font-extralight span (customizable via italicStyle prop)
 */
export function FormattedText({
  text,
  className,
  as: Tag = "span",
  italicStyle = "opacity-80 font-extralight",
  accentColor = "text-brand-accent",
  ...props
}: FormattedTextProps) {
  if (!text) return null;

  // Handle case where text might still be an array during transition
  const rawText = Array.isArray(text) ? text.join(' ') : text;

  const formattedHtml = rawText
    // 1. Line Breaks
    .replace(/\[br\]/g, '<br />')
    // 2. Bold
    .replace(/\[bold\](.*?)\[\/bold\]/g, '<strong class="font-bold text-white">$1</strong>')
    // 3. Italic (Simple)
    .replace(/\[italic\](.*?)\[\/italic\]/g, '<span class="italic">$1</span>')
    // 4. Accent
    .replace(/\[accent\](.*?)\[\/accent\]/g, `<span class="${accentColor}">$1</span>`)
    // 5. Italic Style (Refined)
    .replace(/\[italic-style\](.*?)\[\/italic-style\]/g, `<span class="italic ${italicStyle}">$1</span>`);

  return (
    <Tag
      className={cn("inline-block", className)}
      dangerouslySetInnerHTML={{ __html: formattedHtml }}
      {...props}
    />
  );
}
